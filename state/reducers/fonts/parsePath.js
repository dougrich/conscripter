function basis(t, count) {
  const w = new Array(count) 
  for (let i = 0; i < count; i++) {
    const factor = (i === 0 || i === count - 1)
      ? 1
      : (count - 1)
    w[i] =  factor * Math.pow((1 - t), count - 1 - i) * Math.pow(t, i)
  }
  return function () {
    let v = 0
    for (let i = 0; i < count; i++) {
      v += arguments[i] * w[i]
    }
    return v
  }
}

function cubicInterpolation(x0, y0, x1, y1, x2, y2, x3, y3) {
  const commands = []
  for (let t = 0.1; t < 1; t += 0.06) {
    const apply = basis(t, 4)
    commands.push({
      type: 'L',
      x: apply(x0, x1, x2, x3),
      y: apply(y0, y1, y2, y3)
    })
  }
  // this ensures we end at the exact end point
  commands.push({
    type: 'L',
    x: x3,
    y: y3
  })

  return commands
}

class PathParser {
  constructor (
    config,
    parse5 = require('parse5'),
    svgPathParser = require('svg-path-parser'),
    svgTransformParser = require('svg-transform-parser'),
    arcToBezier = require('svg-arc-to-cubic-bezier')
  ) {
    this.config = config
    this.parse5 = parse5
    this.svgPathParser = svgPathParser
    this.svgTransformParser = svgTransformParser
    this.arcToBezier = arcToBezier.default || arcToBezier
  }

  parseTransform(transform) {
    const detail = this.svgTransformParser.parse(transform)

    return (node) => {
      const { type, x, y } = node
      if (detail.translate) {
        const { tx = 0, ty = 0} = detail.translate
        return {
          type,
          x: tx + x,
          y: ty + y
        }
      }

      if (detail.matrix) {
        const { a, b, c, d, e, f } = detail.matrix
        return {
          type,
          x: a * x + c * y + e,
          y: b * x + d * y + f
        }
      }

      if (detail.scale) {
        const { sx, sy = sx} = detail.scale
        return {
          type,
          x: sx * x,
          y: sy * y
        }
      }
    }
  }

  applyTransforms(transforms = [], node) {
    for (const t of transforms) {
      node = t(node)
    }
    return node
  }

  attributes(node) {
    const attributes = {}
    if (node.attrs) {
      for (const attr of node.attrs) {
        attributes[attr.name] = attr.value
      }
    }
    return attributes
  }

  createCommand(cmd, i, arr) {
    if (cmd.code === 'S') {
      let { x: x0, y: y0, x2: x1, y2: y1 } = arr[i - 1]
      const { x2, y2, x, y } = cmd
      if (x1 == y1 && x1 == null) {
        x1 = x0
        y1 = y0
      } else {
        x1 = (x0 - x1) + x0
        y1 = (y0 - y1) + y0
      }
      cmd = {
        code: 'C',
        x1,
        x2,
        y1,
        y2,
        x,
        y
      }
    }

    if (cmd.code === 'A') {
      const { rx, ry, xAxisRotation, largeArc, sweep, x, y, x0, y0 } = cmd
      const curves = this.arcToBezier({
        px: x0,
        py: y0,
        cx: x,
        cy: y,
        rx,
        ry,
        xAxisRotation,
        largeArcFlag: largeArc ? 1 : 0,
        sweepFlag: sweep ? 1 : 0
      })
      const commands = []
      let xlast = x0, ylast = y0
      for (let i = 0; i < curves.length; i++) {
        const { x1, y1, x2, y2, x: x3, y: y3 } = curves[i]
        commands.push(...cubicInterpolation(xlast, ylast, x1, y1, x2, y2, x3, y3))
        xlast = x3
        ylast = y3
      }
      return commands
    }

    if (cmd.code === 'C') {
      const { x: x0, y: y0 } = arr[i - 1]
      const { x: x3, y: y3, x1, x2, y1, y2 } = cmd
      // interpolate - note we skip the start as it should be drawn from the previous node
      return cubicInterpolation(x0, y0, x1, y1, x2, y2, x3, y3)
    }

    if (cmd.code === 'Q') {
      const { x0, y0, x1, y1, x, y } = cmd
      // interpolate - note we skip the start as it should be drawn from the previous node
      const commands = []
      for (let t = 0.1; t < 1; t += 0.06) {
        const apply = basis(t, 3)
        commands.push({
          type: 'L',
          x: apply(x0, x1, x),
          y: apply(y0, y1, y)
        })
      }
      // this ensures we end at the exact end point
      commands.push({
        type: 'L',
        x,
        y
      })

      return commands
    }

    return {
      type: {
        'H': 'L',
        'V': 'L'
      }[cmd.code] || cmd.code,
      x: cmd.x,
      y: cmd.y
    }
  }

  parseChild(node, commands, warnings, transforms = []) {
    const attributes = this.attributes(node)

    if (attributes.transform) {
      transforms = [...transforms, this.parseTransform(attributes.transform)]
    }

    if (node.nodeName === 'path') {
      // it is a path: pull out the critical attribute
      if (attributes.d) {
        const d = attributes.d
        const subCommands = this.svgPathParser.makeAbsolute(this.svgPathParser.parseSVG(d))
        commands.push(...subCommands
          .map((cmd, i, arr) => this.createCommand(cmd, i, arr))
          .reduce((set, v) => Array.isArray(v) ? [...set, ...v] : [...set, v], [])
          .map(cmd => this.applyTransforms(transforms, cmd))
          .map((cmd, i, arr) => {
            if (cmd.x === arr[0].x && cmd.y === arr[0].y && i === arr.length - 1) {
              return { type: 'Z' }
            } else {
              return cmd
            }
          }))
        if (commands[commands.length - 1].type !== 'Z') {
          commands.push({ type: 'Z' })
        }
      }

      if (attributes.fill) {
        const fill = attributes.fill
        if (fill === 'transparent') {
          warnings.push(PathParser.Codes.WarnEmptyFill)
        } else if (!/^#([0-9a-fA-F]){3,6}$/gi.test(fill)) {
          warnings.push(PathParser.Codes.WarnComplexFill)
        }
      }

      if (attributes.stroke) {
        const stroke = attributes.stroke
        if (stroke !== 'transparent') {
          warnings.push(PathParser.Codes.WarnNonEmptyStroke)
        }
      }
    }

    if (node.nodeName === 'rect') {
      const { width, height, x = '0', y = '0' } = attributes
      const widthF = parseFloat(width)
      const heightF = parseFloat(height)
      const xF = parseFloat(x)
      const yF = parseFloat(y)
      const subCommands = [
        { type: 'M', x: xF, y: yF },
        { type: 'L', x: xF + widthF, y: yF },
        { type: 'L', x: xF + widthF, y: yF + heightF },
        { type: 'L', x: xF, y: yF + heightF },
        { type: 'Z' }
      ]
      commands.push(...subCommands.map(cmd => this.applyTransforms(transforms, cmd)))
    }

    if (node.nodeName === 'circle') {
      const { cx, cy, r } = attributes
      const cxF = parseFloat(cx)
      const cyF = parseFloat(cy)
      const rF = parseFloat(r)
      const subCommands = [
        { type: 'M', x: cxF + rF, y: cyF }
      ]
      const incr = 0.076 * Math.PI
      for (let i = incr; i < Math.PI * 2; i += incr) {
        subCommands.push({
          type: 'L', x: cxF + Math.cos(i) * rF, y: cyF + Math.sin(i) * rF
        })
      }
      subCommands.push({ type: 'Z' })
      commands.push(...subCommands.map(cmd => this.applyTransforms(transforms, cmd)))
    }

    if (node.nodeName === 'g') {
      for (const childNode of node.childNodes) {
        this.parseChild(childNode, commands, warnings, transforms)
      }
    }
  }

  findSvgNode(tree) {
    if (tree.nodeName === 'svg') {
      return tree
    }
    
    if (!tree.childNodes) {
      return null
    }

    for (let i = 0; i < tree.childNodes.length; i++) {
      const svg = this.findSvgNode(tree.childNodes[i])
      if (svg) return svg
    }

    return null
  }

  /**
   * Parses a SVG document into a series of path commands
   * @param {string} svg contents to be parse
   * @returns {{ commands: opentype.PathCommand[]; warnings: { code: string; message: string; }[] }} commands for open type and a list of warning codes: see PathParser.Codes
   */
  parse(svg) {
    const tree = this.parse5.parse(svg)
    const svgNode = this.findSvgNode(tree)

    if (!svgNode) {
      throw new PathParser.Codes.ErrorNoSVGNode()
    }

    let commands = []
    let warnings = []

    for (const childNode of svgNode.childNodes) {
      this.parseChild(childNode, commands, warnings)
    }

    const {
      unitsPerEm,
      descender
    } = this.config

    // scale commands
    let scale = 1.0
    const attributes = this.attributes(svgNode)

    if (attributes.height) {
      scale = unitsPerEm / parseFloat(attributes.height)
    }

    if (attributes.viewBox) {
      scale = unitsPerEm / parseFloat(attributes.viewBox.split(' ')[3])
    }

    for (const cmd of commands) {
      if (cmd.x) cmd.x = cmd.x * scale
      if (cmd.y) cmd.y = (unitsPerEm - cmd.y * scale) + descender
    }

    warnings = warnings.filter((x, i, arr) => arr.indexOf(x) === i)

    return { commands, warnings }
  }
}

PathParser.Codes = {
  ErrorNoSVGNode: class extends Error {
    constructor() {
      super('Could not find the root SVG node - is this a well-formated SVG document?')
      this.code === 'ErrorNoSVGNode'
    }
  },
  WarnEmptyFill: {
    code: 'WarnEmptyFill',
    message: 'One or more paths have an empty fill, which can have unexpected results. Ensure all shapes have a solid fill and no stroke.'
  },
  WarnComplexFill: {
    code: 'WarnComplexFill',
    message: 'One or more paths have a fill that is not a solid flat color, which can have unexpected results. Ensure all shapes have a solid fill and no stroke.'
  },
  WarnNonEmptyStroke: {
    code: 'WarnNonEmptyStroke',
    message: 'One or more paths have a non-empty stroke, which can have unexpected results. Ensure all shapes have a solid fill and no stroke.'
  }
}

module.exports = PathParser