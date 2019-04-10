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

  it('parses circle', () => {
    const { commands, warnings } = parse('circle.svg')
    expect(warnings).to.be.empty
    expect(commands).to.eql([
      { type: 'M', x: 900, y: 300 },
      { type: 'L', x: 888.6526931658696, y: 205.40040119051014 },
      { type: 'L', x: 855.2545795254179, y: 116.16805575140484 },
      { type: 'L', x: 801.7005522944416, y: 37.36569769881737 },
      { type: 'L', x: 731.0290813689071, y: -26.53570028687352 },
      { type: 'L', x: 647.2498210738712, y: -71.91059435530053 },
      { type: 'L', x: 555.1161162738553, y: -96.18457027866043 },
      { type: 'L', x: 459.85531405951406, y: -97.98040679252017 },
      { type: 'L', x: 366.87218219080535, y: -77.19621435714566 },
      { type: 'L', x: 281.4422613062924, y: -35.01121601685668 },
      { type: 'L', x: 208.41254903143547, y: 26.18115762852449 },
      { type: 'L', x: 151.92649813218978, y: 102.90906338068316 },
      { type: 'L', x: 115.18893136556571, y: 190.81922579306956 },
      { type: 'L', x: 100.28421094376434, y: 284.9239269320258 },
      { type: 'L', x: 108.05797904630118, y: 379.8839922057624 },
      { type: 'L', x: 138.0691790135919, y: 470.31171662602856 },
      { type: 'L', x: 188.61507937319027, y: 551.0765445162797 },
      { type: 'L', x: 256.8278809221574, y: 617.5961594591338 },
      { type: 'L', x: 338.83742571453456, y: 666.0964690483669 },
      { type: 'L', x: 429.9907764098893, y: 693.8257338116821 },
      { type: 'L', x: 525.1162078117251, y: 699.2106913713086 },
      { type: 'L', x: 618.8166326308138, y: 681.9458178986572 },
      { type: 'L', x: 705.7758135126026, y: 643.010662477461 },
      { type: 'L', x: 781.0599879195397, y: 584.6142708837141 },
      { type: 'L', x: 840.3977927178768, y: 510.0698519845182 },
      { type: 'L', x: 880.4226065180615, y: 423.6067977499787 },
      { type: 'L', x: 898.8635601042456, y: 330.1307222111727 },
      { type: 'Z' }
    ])
  })

  it('parses curve', () => {
    const { commands, warnings } = parse('curve.svg')
    expect(warnings).to.be.empty
    expect(commands).to.eql([
      { type: 'M', x: 100, y: 700 },
      { type: 'L', x: 144.00000000000003, y: 484 },
      { type: 'L', x: 182.30399999999997, y: 377.44000000000005 },
      { type: 'L', x: 227.952, y: 288.15999999999997 },
      { type: 'L', x: 279.648, y: 216.15999999999997 },
      { type: 'L', x: 336.096, y: 161.44000000000005 },
      { type: 'L', x: 396.0000000000001, y: 123.99999999999989 },
      { type: 'L', x: 458.064, y: 103.84000000000003 },
      { type: 'L', x: 520.992, y: 100.96000000000004 },
      { type: 'L', x: 583.488, y: 115.3599999999999 },
      { type: 'L', x: 644.2560000000001, y: 147.04000000000008 },
      { type: 'L', x: 702.0000000000002, y: 196.0000000000001 },
      { type: 'L', x: 755.4240000000002, y: 262.24000000000024 },
      { type: 'L', x: 803.2320000000002, y: 345.76000000000045 },
      { type: 'L', x: 844.1280000000004, y: 446.5600000000006 },
      { type: 'L', x: 876.8160000000001, y: 564.6400000000008 },
      { type: 'L', x: 900, y: 700 },
      { type: 'Z' }
    ])
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
    expect(commands).to.eql([
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
    ])
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