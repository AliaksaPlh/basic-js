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
  let arr = n.toString().split(""); // ger arr from n by digits
  let resultsArr = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr.concat();
    element.splice(i, 1);
    resultsArr.push(+element.join(""));
  }
  resultsArr.sort(function (a, b) {
    return a - b;
  });
  resultsArr.reverse();
  return resultsArr[0];
}

module.exports = {
  deleteDigit,
};
