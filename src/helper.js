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

export default {
  sleep,
  sleepSeq,
}
