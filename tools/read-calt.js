const opentype = require('opentype.js')

const font = opentype.loadSync(process.argv[2])

console.log(JSON.stringify(font.names, null, '  '))

// font.download('read.otf')