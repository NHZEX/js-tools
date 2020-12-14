import {base64_decode, base64_encode, randomBytes, randomHex} from '../src/crypto/util.js';
import test from "ava";

test('base64', t => {
  const text = '123qwe请问阿斯顿...!@#';
  const ciphertext = base64_encode(text, 'utf8');
  const plaintext = base64_decode(ciphertext, 'utf8');
  t.is(text, plaintext)
})

test('random', t => {
  const resultBytes = randomBytes(12);
  t.is(resultBytes.length, 12)

  const resultHex = randomHex(12);
  t.is(resultHex.length, 12)
})
