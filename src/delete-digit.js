const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split("");
  let arrSort = n.toString().split("").sort();
  let result = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == arrSort[0]) {
      arr.splice(i, 1);
    }
  }
  return +arr.join("");
}

module.exports = {
  deleteDigit,
};
