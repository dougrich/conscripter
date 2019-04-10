const { expect } = require('chai')
const fs = require('fs')
const path = require('path')

const PathParser = require('./parsePath')

describe('PathParser#parseTransform', () => {
  const scenarios = [
    [
      'simple translate',
      'translate(-100, 0)',
      { type: 'L', x: 5, y: 10 },
      { type: 'L', x: -95, y: 10 }
    ]
  ]

  const createScenario = ([ name, transform, initial, expected ]) => {
    it(name, () => {
      const parser = new PathParser()

      const fn = parser.parseTransform(transform)
      expect(fn(initial)).to.eql(expected)
    })
  }

  for (const scenario of scenarios) {
    createScenario(scenario)
  }
})

describe('PathParser#parse', () => {
  function parse(file) {
    const filename = path.resolve(__dirname, '../../../../tests/parsePath', file)
    const data = fs.readFileSync(filename, 'utf8')
    const parser = new PathParser({
      unitsPerEm: 1000,
      ascender: 800,
      descender: -200
    })
    return parser.parse(data)
  }

  const simpleCommands = [
    { type: 'M', x: 100, y: 700 },
    { type: 'L', x: 900, y: 700 },
    { type: 'L', x: 900, y: -100 },
    { type: 'L', x: 100, y: -100 },
    { type: 'Z' }
  ]

  const twoSquareCommands = [
    { type: 'M', x: 500, y: 300 },
    { type: 'L', x: 900, y: 300 },
    { type: 'L', x: 900, y: -100 },
    { type: 'L', x: 500, y: -100 },
    { type: 'Z' },
    { type: 'M', x: 500, y: 300 },
    { type: 'L', x: 100, y: 300 },
    { type: 'L', x: 100, y: 700 },
    { type: 'L', x: 500, y: 700 },
    { type: 'Z' }
  ]

  const transformedTwoSquareCommands = [
    { type: 'M', x: 400, y: 300 },
    { type: 'L', x: 800, y: 300 },
    { type: 'L', x: 800, y: -100 },
    { type: 'L', x: 400, y: -100 },
    { type: 'Z' },
    { type: 'M', x: 600, y: 200 },
    { type: 'L', x: 200, y: 200 },
    { type: 'L', x: 200, y: 600 },
    { type: 'L', x: 600, y: 600 },
    { type: 'Z' }
  ]

  it('parses simple path', () => {
    const { commands, warnings } = parse('simple.svg')
    expect(warnings).to.be.empty
    expect(commands).to.eql(simpleCommands)
  })

  it('parses rectangle', () => {
    const { commands, warnings } = parse('rectangle.svg')
    expect(warnings).to.be.empty
    expect(commands).to.eql(simpleCommands)
  })

  it('parses two paths', () => {
    const { commands, warnings } = parse('two-parts.svg')
    expect(warnings).to.be.empty
    expect(commands).to.eql(twoSquareCommands)
  })

  it('parses nested paths', () => {
    const { commands, warnings } = parse('nested.svg')
    expect(warnings).to.be.empty
    expect(commands).to.eql(twoSquareCommands)
  })

  it('parses transform', () => {
    const { commands, warnings } = parse('transform.svg')
    expect(warnings).to.be.empty
    expect(commands).to.eql(transformedTwoSquareCommands)
  })

  it('parses viewbox', () => {
    const { commands, warnings } = parse('viewbox.svg')
    expect(warnings).to.be.empty
    expect(commands).to.eql(twoSquareCommands)
  })

  it('includes one WarnEmptyFill warning if two empty fill present', () => {
    const { commands, warnings } = parse('warn-once-empty-fill.svg')
    expect(warnings).to.include(PathParser.Codes.WarnEmptyFill)
    expect(warnings.length).to.equal(1)
    expect(commands).to.eql(twoSquareCommands)
  })

  it('includes a WarnEmptyFill warning if there is a fill present', () => {
    const { commands, warnings } = parse('warn-empty-fill.svg')
    expect(warnings).to.include(PathParser.Codes.WarnEmptyFill)
    expect(commands).to.eql(simpleCommands)
  })
  it('includes a WarnComplexFill warning if there is a complex fill present', () => {
    const { commands, warnings } = parse('warn-complex-fill.svg')
    expect(warnings).to.include(PathParser.Codes.WarnComplexFill)
    expect(commands).to.eql(simpleCommands)
  })
  it('includes a WarnNonEmptyStroke warning if there is a non-empty stroke present', () => {
    const { commands, warnings } = parse('warn-non-empty-stroke.svg')
    expect(warnings).to.include(PathParser.Codes.WarnNonEmptyStroke)
    expect(commands).to.eql(simpleCommands)
  })
})

xdescribe('test', () => {
  function parse(file) {
    const filename = path.resolve(__dirname, '../../../../tests', file)
    const data = fs.readFileSync(filename, 'utf8')
    const parser = new PathParser({
      unitsPerEm: 1000,
      ascender: 800,
      descender: -200
    })
    return parser.parse(data)
  }
  it('tests e2e/korean-han-combined.svg', () => {
    console.log(parse('e2e/inkscape/korean-han-combined.svg'))
  })
})