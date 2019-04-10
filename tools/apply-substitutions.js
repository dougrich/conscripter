const { applySubstitutions } = require('../src/state/reducers/fonts/assembleDataUri')
const fs = require('fs')
const opentype = require('opentype.js')

const font = opentype.loadSync('./src/static/AVHersheySimplexMedium.otf')

const subs = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))

applySubstitutions(font, subs)

font.download('demo.otf')