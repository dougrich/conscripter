export default {
  match: (data) => {
    return data.indexOf('data:text/json;charset=utf-8;base64,') === 0 || data[0] === '{'
  },
  encode: ({ fonts: { substitutions, fontname } }) => {
    return 'data:text/json;charset=utf-8;base64,' + window.btoa(JSON.stringify({ version: '0.1.1', substitutions, fontname }))
  },
  decode: (data) => {
    if (data[0] === '{') {
      const { substitutions = [], fontname = 'My Custom Font' } = JSON.parse(data)
      return {
        substitutions,
        fontname
      }
    } else if (data.indexOf('data:text/json;charset=utf-8;base64,') === 0) {
      const { substitutions = [], fontname = 'My Custom Font' } = JSON.parse(window.atob(data.slice('data:text/json;charset=utf-8;base64,'.length)))
      return {
        substitutions,
        fontname
      }
    } else {
      throw new Error('JSON Decode does not have handling for this case')
    }
  }
}
