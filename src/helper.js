/**
 * @param {Number} ms
 * @return {Promise<void>}
 */
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * @param {Array} sleepTimes
 * @return {(function(): Promise<void>)|*}
 */
function sleepSeq (sleepTimes) {
    let sleepIndex = 0;
    let sleepCount = 0;
    return async function () {
        if (sleepIndex < sleepTimes.length - 1) {
            if (sleepCount > sleepTimes[sleepIndex][1]) {
                sleepCount = 1
                sleepIndex++
            } else {
                sleepCount++
            }
        }
        await sleep(sleepTimes[sleepIndex][0])
    }
}

/** Function that count occurrences of a substring in a string;
 * @param {String} string               The string
 * @param {String} subString            The sub string to search for
 * @param {Boolean} [allowOverlapping]  Optional. (Default:false)
 *
 * @author Vitim.us https://gist.github.com/victornpb/7736865
 * @see Unit Test https://jsfiddle.net/Victornpb/5axuh96u/
 * @see http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string/7924240#7924240
 */
function substrOccurrences(string, subString, allowOverlapping) {

  string += '';
  subString += '';
  if (subString.length <= 0) return (string.length + 1);

  let n = 0,
    pos = 0,
    step = allowOverlapping ? 1 : subString.length;

  while ((pos = string.indexOf(subString, pos)) >= 0) {
    ++n;
    pos += step;
  }
  return n;
}

export default {
  sleep,
  sleepSeq,
  substrOccurrences,
}
