import {base64_decode, base64_encode, random_bytes, random_hex} from '../src/crypto/util.js';
import {hash, hash_md5, hash_sha1, hash_sha256, hash_sha512} from '../src/crypto/hash.js';
import {aes_gcm_encrypt, aes_gcm_decrypt} from '../src/crypto/aes.js';
import test from "ava";

test('base64', t => {
  const text = '123qwe请问阿斯顿...!@#';
  const ciphertext = base64_encode(text, 'utf8');
  const plaintext = base64_decode(ciphertext, 'utf8');
  t.is(text, plaintext)
})

test('random', t => {
  const resultBytes = random_bytes(12);
  t.is(resultBytes.length, 12)

  const resultHex = random_hex(12);
  t.is(resultHex.length, 12)
})

test('hash_all', t => {
  const text = '123456qweasd请问阿斯顿';

  t.is(hash('md5', text), '9d2f17c9d38caa149155253a73659c5d')
  t.is(hash('sha1', text), '4577fe4e362cb64712c2c728800e66d38331cfd1')
  t.is(hash('sha256', text), '43e68d738dcc46b5e944057ac3e5dc60c371af00f18e8ae200c304747d6b0e08')
  t.is(hash('sha512', text), '3f9556e4b888837a78112f6aac41f093666aa42631232308b31bcaf9fcc6f3137fda8e213065a9223a0992bdffe3ad13ba6737975f954e30ebfe48554e318516')
})

test('hash_md5', t => {
  const text = '123456qweasd请问阿斯顿';

  t.is(hash_md5(text), '9d2f17c9d38caa149155253a73659c5d')
})

test('hash_sha1', t => {
  const text = '123456qweasd请问阿斯顿';

  t.is(hash_sha1(text), '4577fe4e362cb64712c2c728800e66d38331cfd1')
})

test('hash_sha256', t => {
  const text = '123456qweasd请问阿斯顿';

  t.is(hash_sha256(text), '43e68d738dcc46b5e944057ac3e5dc60c371af00f18e8ae200c304747d6b0e08')
})

test('hash_sha512', t => {
  const text = '123456qweasd请问阿斯顿';

  t.is(hash_sha512(text), '3f9556e4b888837a78112f6aac41f093666aa42631232308b31bcaf9fcc6f3137fda8e213065a9223a0992bdffe3ad13ba6737975f954e30ebfe48554e318516')
})

test('aes_gcm', t => {
  const plaintext = '123456qweasd请问阿斯顿';
  const key = '0123456789ABCDEF'

  const ciphertext = aes_gcm_encrypt(plaintext, key, 'utf8');
  const decryptPlaintext = aes_gcm_decrypt(ciphertext, key, 'utf8');

  t.is(decryptPlaintext, plaintext)
})
