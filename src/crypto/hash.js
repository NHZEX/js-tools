import md from "node-forge/lib/md.all.js";
import md5 from "node-forge/lib/md5.js";
import sha1 from "node-forge/lib/sha1.js";
import sha256 from "node-forge/lib/sha256.js";
import sha512 from "node-forge/lib/sha512.js";
import hmac from "node-forge/lib/hmac.js";
import util from "node-forge/lib/util.js";

function hash_wrapper(algoMd, data, rawOutput = false)
{
  const hash = algoMd.create()
  hash.update(data, 'utf8')
  const result = hash.digest()
  return rawOutput ? result.getBytes() : result.toHex()
}

/**
 * @param {String} algo md5, sha1 sha256 sha384 sha512
 * @param {String} data
 * @param {Boolean} rawOutput
 * @return {String}
 */
export function hash (algo, data, rawOutput = false) {
  return hash_wrapper(md[algo], data, rawOutput)
}

export function hash_md5(data, rawOutput = false)
{
  return hash_wrapper(md5, data, rawOutput)
}

export function hash_sha1(data, rawOutput = false)
{
  return hash_wrapper(sha1, data, rawOutput)
}

export function hash_sha256(data, rawOutput = false)
{
  return hash_wrapper(sha256, data, rawOutput)
}

export function hash_sha512(data, rawOutput = false)
{
  return hash_wrapper(sha512, data, rawOutput)
}

/**
 * @param {String} algo
 * @param {String} str
 * @param {String} key
 * @param {Boolean} rawOutput
 * @returns {String}
 */
export function hash_hmac (algo, str, key, rawOutput = false) {
  const h = hmac.create()
  h.start(algo, util.encodeUtf8(key, 'utf8'))
  h.update(util.encodeUtf8(str, 'utf8'))
  const result = h.digest()
  return rawOutput ? result.getBytes() : result.toHex()
}

export default {
  hash,
  hash_md5,
}
