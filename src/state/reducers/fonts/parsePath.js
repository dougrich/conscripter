function basis(t) {
  const w0 = Math.pow((1 - t), 3) * Math.pow(t, 0),
        w1 = 3 * Math.pow((1 - t), 2) * Math.pow(t, 1),
        w2 = 3 * Math.pow((1 - t), 1) * Math.pow(t, 2),
        w3 = Math.pow((1 - t), 0) * Math.pow(t, 3)
  return (v0, v1, v2, v3) => w0 * v0 + w1 * v1 + w2 * v2 + w3 * v3
}

class PathParser {
  constructor (
    config,
    parse5 = require('parse5'),
    svgPathParser = require('svg-path-parser'),
    svgTransformParser = require('svg-transform-parser')
  ) {
    this.config = config
    this.parse5 = parse5
    this.svgPathParser = svgPathParser
    this.svgTransformParser = svgTransformParser
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
    if (cmd.code === 'C') {
      const { x: x0, y: y0 } = arr[i - 1]
      const { x: x3, y: y3, x1, x2, y1, y2 } = cmd
      // interpolate - note we skip the start as it should be drawn from the previous node
      const commands = []
      for (let t = 0.1; t < 1; t += 0.06) {
        const apply = basis(t)
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



      console.log(x0, x1, x2, x3, y0, y1, y2, y3)
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

  /**
   * Parses a SVG document into a series of path commands
   * @param {string} svg contents to be parse
   * @returns {{ commands: opentype.PathCommand[]; warnings: { code: string; message: string; }[] }} commands for open type and a list of warning codes: see PathParser.Codes
   */
  parse(svg) {
    const tree = this.parse5.parse(svg)
    const svgNode = tree.childNodes[1].childNodes[1].childNodes[0]

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