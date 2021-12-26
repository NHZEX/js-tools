import test from "ava";
import helper from "../src/helper.js";

test('substr_occurrences', t => {
  t.is(0, helper.substrOccurrences('', 'bar'))
  t.is(0, helper.substrOccurrences('foofoofoo', 'bar'))
  t.is(3, helper.substrOccurrences('foofoofoo', 'foo'))
  t.is(1, helper.substrOccurrences('foofoofoo', 'foofoo'))
  t.is(2, helper.substrOccurrences('foofoofoo', 'foofoo', true))
})

test('range_int', t => {
  t.deepEqual([], helper.rangeInt(0, 0))
  t.deepEqual([0], helper.rangeInt(1, 0))
  t.deepEqual([0, 1, 2, 3, 4], helper.rangeInt(5, 0))
  t.deepEqual([1, 2, 3, 4, 5], helper.rangeInt(5, 1))
})
