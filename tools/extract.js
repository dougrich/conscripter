const opentype = require('opentype.js')
const fs = require('fs')

const font = opentype.loadSync(process.argv[2])
const extract = [

]

const capturedWidths = {}
for (const glyph in font.glyphs.glyphs) {
  capturedWidths[glyph] = font.glyphs.glyphs[glyph].advanceWidth
}

for (let i = 0 ; i < font.tables.gsub.lookups.length; i++) {
  const lookup = font.tables.gsub.lookups[i]
  switch (lookup.lookupType) {
    case 1: {
        const replaceCode = lookup.subtables[0].coverage.glyphs[0]
        const delta = lookup.subtables[0].deltaGlyphId
        const original = String.fromCharCode(font.glyphs.get(replaceCode).unicode)
        const replacement = font.glyphs.glyphs[replaceCode + delta]
        const commands = replacement.path.commands
        extract.push({
          replace: [original],
          glyph: {
            commands,
            advanceWidth: capturedWidths[replaceCode + delta]
          }
        })
      }
      break;
    case 4: {
        let replace = [lookup.subtables[0].coverage.glyphs[0]]
        const replacementCode = lookup.subtables[0].ligatureSets[0][0].ligGlyph
        replace.push(...lookup.subtables[0].ligatureSets[0][0].components)
        const original = replace
          .map(x => String.fromCharCode(font.glyphs.get(x).unicode))
          .join('')
        
        const replacement = font.glyphs.get(replacementCode)
        const commands = replacement.path.commands
        extract.push({
          replace: [original],
          glyph: {
            commands,
            advanceWidth: capturedWidths[replacementCode]
          }
        })
      }
      break;
  }
}

fs.writeFileSync('./extract.json', JSON.stringify(extract))

// font.download('read.otf')