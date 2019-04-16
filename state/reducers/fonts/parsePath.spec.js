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
    const filename = path.resolve(__dirname, '../../../tests/parsePath', file)
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

  it('parses relative', () => {
    const { commands, warnings } = parse('relative.svg')
    expect(warnings).to.be.empty
    expect(commands).to.eql(simpleCommands)
  })

  it('parses standing-s-curve', () => {
    const { commands, warnings } = parse('standing-s-curve.svg')
    expect(warnings).to.be.empty
    expect(commands).to.eql([
      { type: 'M', x: 100, y: 700 },
      { type: 'L', x: 111.6, y: 678.4 },
      { type: 'L', x: 129.08159999999998, y: 648.3904 },
      { type: 'L', x: 153.82080000000002, y: 609.3951999999999 },
      { type: 'L', x: 185.2992, y: 564.5247999999999 },
      { type: 'L', x: 222.99839999999995, y: 516.8896 },
      { type: 'L', x: 266.40000000000003, y: 469.5999999999999 },
      { type: 'L', x: 314.98560000000003, y: 425.7664 },
      { type: 'L', x: 368.2368, y: 388.4992 },
      { type: 'L', x: 425.6352000000001, y: 360.9087999999999 },
      { type: 'L', x: 486.66240000000016, y: 346.1056 },
      { type: 'L', x: 550.8000000000002, y: 347.20000000000005 },
      { type: 'L', x: 617.5296000000002, y: 367.30240000000015 },
      { type: 'L', x: 686.3328000000002, y: 409.5232000000003 },
      { type: 'L', x: 756.6912000000004, y: 476.97280000000046 },
      { type: 'L', x: 828.0864000000004, y: 572.7616000000007 },
      { type: 'L', x: 900, y: 700 },
      { type: 'Z' }
    ])
  })

  it('parses curved-s-curve', () => {
    const { commands, warnings } = parse('curved-s-curve.svg')
    expect(warnings).to.be.empty
    expect(commands).to.eql([
      { type: 'M', x: 100, y: 700 },
      { type: 'L', x: 100.4, y: 618.5999999999999 },
      { type: 'L', x: 101.63839999999999, y: 577.4016 },
      { type: 'L', x: 104.25920000000002, y: 541.3008 },
      { type: 'L', x: 108.7808, y: 509.77919999999995 },
      { type: 'L', x: 115.72159999999998, y: 482.3184000000001 },
      { type: 'L', x: 125.60000000000002, y: 458.4 },
      { type: 'L', x: 138.9344, y: 437.50559999999996 },
      { type: 'L', x: 156.2432, y: 419.1168 },
      { type: 'L', x: 178.04480000000007, y: 402.7152000000001 },
      { type: 'L', x: 204.85760000000005, y: 387.78239999999994 },
      { type: 'L', x: 237.20000000000013, y: 373.79999999999995 },
      { type: 'L', x: 275.59040000000016, y: 360.2495999999999 },
      { type: 'L', x: 320.5472000000002, y: 346.6128 },
      { type: 'L', x: 372.58880000000033, y: 332.37119999999993 },
      { type: 'L', x: 432.2336000000004, y: 317.00639999999987 },
      { type: 'L', x: 500, y: 300 },
      { type: 'L', x: 608.4000000000001, y: 272.6 },
      { type: 'L', x: 662.9183999999998, y: 258.04160000000013 },
      { type: 'L', x: 710.1792, y: 244.26080000000002 },
      { type: 'L', x: 750.7008000000001, y: 230.73919999999998 },
      { type: 'L', x: 785.0015999999999, y: 216.9584000000002 },
      { type: 'L', x: 813.6000000000001, y: 202.39999999999998 },
      { type: 'L', x: 837.0144, y: 186.54559999999992 },
      { type: 'L', x: 855.7632000000001, y: 168.8768 },
      { type: 'L', x: 870.3648000000001, y: 148.87519999999995 },
      { type: 'L', x: 881.3376, y: 126.02239999999995 },
      { type: 'L', x: 889.2, y: 99.79999999999995 },
      { type: 'L', x: 894.4704, y: 69.68959999999993 },
      { type: 'L', x: 897.6671999999999, y: 35.172799999999825 },
      { type: 'L', x: 899.3088, y: -4.268800000000283 },
      { type: 'L', x: 899.9136, y: -49.15360000000021 },
      { type: 'L', x: 900, y: -100 },
      { type: 'Z' }
    ])
  })

  it('parses around a simple comment', () => {
    const { commands, warnings } = parse('comments.svg')
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

  it('parses transform-scale', () => {
    const { commands, warnings } = parse('transform-scale.svg')
    expect(warnings).to.be.empty
    expect(commands).to.eql([
      { type: 'M', x: 50, y: 750 },
      { type: 'L', x: 450, y: 750 },
      { type: 'L', x: 450, y: 350 },
      { type: 'L', x: 50, y: 350 },
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

  it('errors on missing SVG', () => {
    expect(() => parse('error-no-root.svg')).to.throw(PathParser.Codes.ErrorNoSVGNode)
  })
})