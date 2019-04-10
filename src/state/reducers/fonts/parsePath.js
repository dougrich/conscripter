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

    return ({ type, x, y }) => {
      if (type === 'Z') return { type, x, y }
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
        commands.push(...subCommands.map((cmd, i, arr) => {
          const newcmd = this.applyTransforms(transforms, {
            type: {
              'H': 'L',
              'V': 'L'
            }[cmd.code] || cmd.code,
            x: cmd.x,
            y: cmd.y
          })

          if (newcmd.x === arr[0].x && newcmd.y === arr[0].y && i === arr.length - 1) {
            return { type: 'Z' }
          } else {
            return newcmd
          }
        }))
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