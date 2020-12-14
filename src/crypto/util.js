import util from 'node-forge/lib/util.js'
import random from 'node-forge/lib/random.js'

export function randomBytes (length = 16) {
  return random.getBytesSync(length)
}

export function randomHex (length = 16) {
  return util.bytesToHex(randomBytes(Math.ceil(length / 2)))
}

// todo Utf8 处理
// new TextEncoder().encode(text)
// new TextDecoder('utf-8').decode()

export function base64_encode (str, encoding = 'raw') {
  if (encoding === 'utf8') {
    str = util.encodeUtf8(str)
  }
  return util.encode64(str)
}

export function base64_decode (str, encoding = 'raw') {
  let result = util.decode64(str)
  if (encoding === 'utf8') {
    result = util.decodeUtf8(result)
  }
  return result
}
