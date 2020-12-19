const zxin = require('../index.js')
const test = require('ava')

test('base64', t => {
  const text = '123qwe请问阿斯顿...!@#';
  const ciphertext = zxin.util.base64_encode(text, 'utf8');
  const plaintext = zxin.util.base64_decode(ciphertext, 'utf8');
  t.is(text, plaintext)
})

test('random', t => {
  const resultBytes = zxin.util.randomBytes(12);
  t.is(resultBytes.length, 12)

  const resultHex = zxin.util.randomHex(12);
  t.is(resultHex.length, 12)
})
