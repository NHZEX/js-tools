import util from 'node-forge/lib/util.js'
import random from 'node-forge/lib/random.js'

export function random_bytes (length = 16) {
  return random.getBytesSync(length)
}

export function random_hex (length = 16) {
  return util.bytesToHex(random_bytes(Math.ceil(length / 2)))
}

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

// utf8 处理参考
// new TextEncoder().encode(text)
// new TextDecoder('utf-8').decode()

export default {
  random_bytes,
  random_hex,
  base64_encode,
  base64_decode,
}
