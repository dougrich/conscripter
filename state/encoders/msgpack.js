import * as msgpack from 'msgpack-lite'

const Glyph = {
  name: 'conscripterglyph'
}

const codec = msgpack.createCodec()

codec.addExtPacker(0x20, Glyph, ({ commands, advanceWidth, isDiacritic }) => {
  const commandBuffer = Buffer.alloc(commands.length * 9)
  for (let i = 0; i < commands.length; i++) {
    const { type, x, y } = commands[i]
    commandBuffer.writeUInt8(type.charCodeAt(0), i * 9 + 0)
    commandBuffer.writeFloatLE(x || 0, i * 9 + 1)
    commandBuffer.writeFloatLE(y || 0, i * 9 + 5)
  }
  return msgpack.encode({ commandBuffer, advanceWidth, isDiacritic })
})

codec.addExtUnpacker(0x20, (data) => {
  const d = msgpack.decode(data)
  const commands = new Array(d.commandBuffer.length / 9)
  for (let i = 0; i < commands.length; i++) {
    const type = String.fromCharCode(d.commandBuffer.readUInt8(i * 9 + 0))
    const x = d.commandBuffer.readFloatLE(i * 9 + 1)
    const y = d.commandBuffer.readFloatLE(i * 9 + 5)
    commands[i] = { type, x, y }
  }
  return { commands, advanceWidth: d.advanceWidth, isDiacritic: d.isDiacritic }
})

export default {
  match: (data) => {
    return data[0] === 131
  },
  encode: ({ fonts: { substitutions, fontname } }) => {
    substitutions = substitutions.map(s => ({
      ...s,
      glyph: {
        ...s.glyph,
        constructor: Glyph
      }
    }))
    return msgpack.encode({ substitutions, fontname, version: '0.1.0' }, { codec })
  },
  decode: (data) => {
    return msgpack.decode(data, { codec })
  }
}
