const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arrS1 = s1.split("").sort();
  let arrS2 = s2.split("").sort();
  let result = 0;
  if (arrS1.length >= arrS2.length) {
    for (let i = 0; i < arrS1.length; i++) {
      for (let j = 0; j < arrS2.length; j++) {
        if (arrS1[i] == arrS2[j] && arrS1[i] != undefined) {
          delete arrS1[i];
          delete arrS2[j];
          result++;
        }
      }
    }
  } else {
    for (let i = 0; i < arrS2.length; i++) {
      for (let j = 0; j < arrS1.length; j++) {
        if (arrS2[i] == arrS1[j] && arrS1[i] != undefined) {
          delete arrS1[i];
          delete arrS2[j];
          result++;
        }
      }
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount,
};
