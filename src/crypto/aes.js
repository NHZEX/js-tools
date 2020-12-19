import random from "node-forge/lib/random.js";
import cipher from "node-forge/lib/cipher.js";
import util from "node-forge/lib/util.js";

/**
 * @param {String} data
 * @param {String} key
 * @param encoding
 * @returns {String}
 */
export function aes_gcm_encrypt (data, key, encoding = 'raw') {
  const iv = random.getBytesSync(12)
  const aes = cipher.createCipher('AES-GCM', key)
  aes.start({
    iv: iv,
    additionalData: '', // optional
    tagLength: 16, // optional
  })
  aes.update(util.createBuffer(data, encoding))
  aes.finish()
  return iv + aes.output.getBytes() + aes.mode.tag.getBytes()
}

/**
 * @param {String} data
 * @param {String} key
 * @param encoding
 * @returns {String|Boolean}
 */
export function aes_gcm_decrypt (data, key, encoding = 'raw') {
  const buff = util.createBuffer(data)
  const iv = buff.getBytes(12)
  const ciphertext = buff.getBytes(buff.length() - 16)
  const tag = buff.getBytes(16)

  const aes = cipher.createCipher('AES-GCM', key)
  aes.start({
    iv: iv,
    additionalData: '', // optional
    tagLength: 16, // optional
    tag: tag,
  })
  aes.update(util.createBuffer(ciphertext))
  const pass = aes.finish()
  if (pass) {
    if (encoding === 'raw') {
      return aes.output.getBytes()
    } else {
      return util.createBuffer(aes.output).toString(encoding)
    }
  }
  return false
}

export default {
  aes_gcm_encrypt,
  aes_gcm_decrypt,
}
