const opentype = require('opentype.js')
const slugify = require('slugify')

const defaultFontName = 'conscripter-custom-font'

const fontPrototype = Object.getPrototypeOf(new opentype.Font({
  familyName: 'test',
  styleName: 'test',
  unitsPerEm: 1000,
  ascender: 800,
  descender: -200,
  glyphs: {}
}))

const defaultGsub = {
  version: 1,
  scripts: [
    {
      tag: 'DFLT',
      script: {
        defaultLangSys: {
          reserved: 0,
          reqFeatureIndex: 65535,
          featureIndexes: [
            0
          ]
        },
        langSysRecords: []
      }
    },
    {
      tag: 'latn',
      script: {
        defaultLangSys: {
          reserved: 0,
          reqFeatureIndex: 65535,
          featureIndexes: [
            0
          ]
        },
        langSysRecords: []
      }
    }
  ],
  features: [
    {
      tag: 'calt',
      feature: {
        featureParams: 0,
        lookupListIndexes: []
      }
    }
  ],
  lookups: []
}

function arrayBufferToBase64 (buffer) {
  let binary = ''
  const bytes = new Uint8Array(buffer)
  const len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}

function assertBadInput (truthy, message) {
  if (!truthy) {
    const error = new Error(message)
    error.status = 400
    throw error
  }
}

function makeSingleSubstitutionLookup (font, character, glyph) {
  const leadingGlyph = font.charToGlyphIndex(character)

  const subtable = {
    substFormat: 1,
    coverage: {
      format: 1,
      glyphs: [leadingGlyph]
    },
    deltaGlyphId: glyph - leadingGlyph
  }

  return {
    lookupType: 1,
    lookupFlag: 0,
    subtables: [subtable]
  }
}

function makeMultiSubstitutionLookup (font, characters, glyph) {
  const components = new Array(characters.length - 1)
  for (let i = 1; i < characters.length; i++) {
    components[i - 1] = font.charToGlyphIndex(characters[i])
  }
  const leadingGlyph = font.charToGlyphIndex(characters[0])

  const subtable = {
    substFormat: 1,
    coverage: {
      format: 1,
      glyphs: [leadingGlyph]
    },
    ligatureSets: [[{ ligGlyph: glyph, components }]]
  }

  return {
    lookupType: 4,
    lookupFlag: 0,
    subtables: [subtable]
  }
}

function translate (x, y, commands) {
  return commands.map(cmd => ({
    ...cmd,
    x: cmd.x != null ? cmd.x + x : cmd.x,
    y: cmd.y != null ? cmd.y + y : cmd.y
  }))
}

function addSubstitution (font, characters, glyph) {
  assertBadInput(typeof (characters) === 'string', 'characters argument must be a string')
  assertBadInput(characters.length >= 1, 'characters argument must be a string >= 1')
  assertBadInput(typeof (glyph) === 'number', 'glyph argument must be a glyph code')
  assertBadInput(Object.getPrototypeOf(font) === fontPrototype, 'font must be an instance of opentype.Font')

  const gsub = font.tables.gsub = font.tables.gsub || JSON.parse(JSON.stringify(defaultGsub))

  if (characters.length > 1) {
    gsub.lookups.push(makeMultiSubstitutionLookup(font, characters, glyph))
  } else {
    gsub.lookups.push(makeSingleSubstitutionLookup(font, characters, glyph))
  }

  gsub.features[0].feature.lookupListIndexes.push(gsub.lookups.length - 1)
}

function addGlyph (font, { isDiacritic, advanceWidth, commands }) {
  const g = new opentype.Glyph({
    index: font.glyphs.length,
    name: `glyph${font.glyphs.length}`
  })
  g.advanceWidth = isDiacritic ? 0 : advanceWidth
  g.path = new opentype.Path({
    fill: 'black',
    stroke: null,
    strokeWidth: 1,
    unitsPerEm: font.unitsPerEm
  })
  g.path.commands = isDiacritic ? translate(-advanceWidth, 0, commands) : commands
  font.glyphs.push(g.index, g)
  return g
}

function applySubstitutions (font, substitutions, fontname = defaultFontName) {
  for (const { replace, glyph } of substitutions) {
    const glyphId = addGlyph(font, glyph)
    for (const text of replace) {
      addSubstitution(font, text, glyphId.index)
    }
  }

  font.names = {
    copyright: {
      en: 'Made by Conscripter, a tool for building conlang scripts\n\nLicence: CC0 1.0\n\nBase glyphs are derived from AVHershey Simplex, created in 2016 by Stewart C. Russel (scruss.com), which is in turn dervied from the character stroke coordinates publshed by Allen V. Hershey in "Calligraphy for Computers". Additional glyphs included through use of the app may have a different licence.'
    },
    fontFamily: {
      en: fontname
    },
    fontSubfamily: {
      en: 'Medium'
    },
    fullName: {
      en: fontname + 'Medium'
    },
    version: {
      en: 'Version 000.001'
    },
    postScriptName: {
      en: (fontname + 'Medium').replace(/\s/gi, '')
    }
  }
}

function assembleDataUri (buffer, substitutions, fontname) {
  const font = opentype.parse(buffer)
  applySubstitutions(font, substitutions, fontname)

  return {
    datauri: 'data:font/otf;base64,' + arrayBufferToBase64(font.toArrayBuffer()),
    meta: {
      unitsPerEm: font.unitsPerEm,
      descender: font.descender
    }
  }
}

function download (buffer, substitutions, fontname = defaultFontName) {
  const font = opentype.parse(buffer)
  applySubstitutions(font, substitutions, fontname)
  const downloadname = slugify(fontname || defaultFontName) + '.otf'
  font.download(downloadname)
}

module.exports = {
  applySubstitutions,
  assembleDataUri,
  download
}
