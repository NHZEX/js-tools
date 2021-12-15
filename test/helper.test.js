import test from "ava";
import helper from "../src/helper.js";

test('substr_occurrences', t => {
  t.is(0, helper.substrOccurrences('', 'bar'))
  t.is(0, helper.substrOccurrences('foofoofoo', 'bar'))
  t.is(3, helper.substrOccurrences('foofoofoo', 'foo'))
  t.is(1, helper.substrOccurrences('foofoofoo', 'foofoo'))
  t.is(2, helper.substrOccurrences('foofoofoo', 'foofoo', true))
})
