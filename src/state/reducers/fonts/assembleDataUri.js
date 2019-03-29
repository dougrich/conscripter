import * as opentype from 'opentype.js'

const fontPrototype = Object.getPrototypeOf(new opentype.Font({
  familyName: 'test',
  styleName: 'test',
  unitsPerEm: 1000,
  ascender: 800,
  descender: -200,
  glyphs: {}
}))

const defaultGsub = {"version":1,"scripts":[{"tag":"DFLT","script":{"defaultLangSys":{"reserved":0,"reqFeatureIndex":65535,"featureIndexes":[0]},"langSysRecords":[]}}],"features":[{"tag":"calt","feature":{"featureParams":0,"lookupListIndexes":[0]}}],"lookups":[{"lookupType":4,"lookupFlag":0,"subtables":[{"substFormat":1,"coverage":{"format":1,"glyphs":[]},"ligatureSets":[]}]}]}

function arrayBufferToBase64( buffer ) {
  var binary = '';
  var bytes = new Uint8Array( buffer );
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
  }
  return window.btoa( binary );
}

function assertBadInput(truthy, message) {
  if (!truthy) {
    const error = new Error(message)
    error.status = 400
    throw error
  }
}

function addSubstitution(font, characters, glyph) {
  assertBadInput(typeof (characters) === 'string', 'characters argument must be a string')
  assertBadInput(characters.length >= 1, 'characters argument must be a string >= 1')
  assertBadInput(typeof (glyph) === 'number', 'glyph argument must be a glyph code')
  assertBadInput(Object.getPrototypeOf(font) === fontPrototype, 'font must be an instance of opentype.Font')

  const gsub = font.tables.gsub = font.tables.gsub || defaultGsub
  const subtable = gsub.lookups[0].subtables[0]
  const components = new Array(characters.length - 1)
  for (let i = 1; i < characters.length; i++) {
    components[i - 1] = font.charToGlyphIndex(characters[i])
  }
  let ligatureSets = []
  let leadingGlyph = font.charToGlyphIndex(characters[0])
  for (let i = 0; i < subtable.coverage.glyphs.length; i++) {
    const glyph = subtable.coverage.glyphs[i]
    if (glyph === leadingGlyph) {
      ligatureSets = subtable.ligatureSets[i]
    }
  }
  if (ligatureSets.length === 0) {
    subtable.coverage.glyphs.push(leadingGlyph)
    subtable.ligatureSets.push(ligatureSets)
  }
  ligatureSets.push({ ligGlyph: glyph, components })
}

function addGlyph(font, { advanceWidth, commands }) {
  const g = new opentype.Glyph({
    index: font.glyphs.length,
    name: `glyph${font.glyphs.lengt}`
  })
  g.advanceWidth = advanceWidth
  g.path = new opentype.Path({
    fill: 'black',
    stroke: null,
    strokeWidth: 1,
    unitsPerEm: font.unitsPerEm
  })
  g.path.commands = commands
  font.glyphs.push(g.index, g)
  return g
}

export function assembleDataUri(buffer, substitutions) {
  const font = opentype.parse(buffer)
  for (const { replace, glyph } of substitutions) {
    const glyphId = addGlyph(font, glyph)
    for (const text of replace) {
      addSubstitution(font, text, glyphId.index)
    }
  }
  return 'data:font/otf;base64,' + arrayBufferToBase64(font.toArrayBuffer())
}