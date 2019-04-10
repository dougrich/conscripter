class PathParser {
  constructor (
    config,
    parse5 = require('parse5'),
    svgPathParser = require('svg-path-parser')
  ) {
    this.config = config
    this.parse5 = parse5
    this.svgPathParser = svgPathParser
  }

  parseChild(node, commands, warnings) {
    if (node.nodeName === 'path') {
      // it is a path: pull out the critical attribute
      for (const attr of node.attrs) {
        switch (attr.name) {
          case 'd':
            // path declaration: parse it!
            const subCommands = this.svgPathParser.makeAbsolute(this.svgPathParser.parseSVG(attr.value))
            commands.push(...subCommands.map((cmd, i, arr) => {
              const newcmd = {
                type: {
                  'H': 'L',
                  'V': 'L'
                }[cmd.code] || cmd.code,
                x: cmd.x,
                y: cmd.y
              }

              if (newcmd.x === arr[0].x && newcmd.y === arr[0].y && i === arr.length - 1) {
                return { type: 'Z' }
              } else {
                return newcmd
              }
            }))
            break;
          case 'fill':
            if (attr.value === 'transparent') {
              warnings.push(PathParser.Codes.WarnEmptyFill)
            } else if (!/^#([0-9a-fA-F]){3,6}$/gi.test(attr.value)) {
              warnings.push(PathParser.Codes.WarnComplexFill)
            }
            break;
          case 'stroke':
            if (attr.value !== 'transparent') {
              warnings.push(PathParser.Codes.WarnNonEmptyStroke)
            }
            break;
        }
      }
    }

    if (node.nodeName === 'g') {
      for (const childNode of node.childNodes) {
        this.parseChild(childNode, commands, warnings)
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
    for (const attr of svgNode.attrs) {
      switch (attr.name) {
        case 'height':
          scale = unitsPerEm / parseFloat(attr.value)
          break;
      }
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