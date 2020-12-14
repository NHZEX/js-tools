import random from "node-forge/lib/random";
import cipher from "node-forge/lib/cipher";
import util from "node-forge/lib/util";

/**
 * @param {String} data
 * @param {String} key
 * @returns {String}
 */
export function aes_gcm_encrypt (data, key) {
  const iv = random.getBytesSync(12)
  const aes = cipher.createCipher('AES-GCM', key)
  aes.start({
    iv: iv,
    additionalData: '', // optional
    tagLength: 16, // optional
  })
  aes.update(util.createBuffer(data))
  aes.finish()
  return iv + aes.output.getBytes() + aes.mode.tag.getBytes()
}

/**
 * @param {String} data
 * @param {String} key
 * @returns {String|Boolean}
 */
export function aes_gcm_decrypt (data, key) {
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
    return aes.output.getBytes()
  }
  return false
}
