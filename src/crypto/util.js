const util = require('node-forge/lib/util.js')
const random = require('node-forge/lib/random.js')

module.exports = {
  randomBytes (length = 16) {
    return random.getBytesSync(length)
  },
  randomHex (length = 16) {
    return util.bytesToHex(this.randomBytes(Math.ceil(length / 2)))
  },
  base64_encode (str, encoding = 'raw') {
    if (encoding === 'utf8') {
      str = util.encodeUtf8(str)
    }
    return util.encode64(str)
  },
  base64_decode (str, encoding = 'raw') {
    let result = util.decode64(str)
    if (encoding === 'utf8') {
      result = util.decodeUtf8(result)
    }
    return result
  }
}

// todo Utf8 处理
// new TextEncoder().encode(text)
// new TextDecoder('utf-8').decode()
