const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
// --discard-next
// --discard-prev
// --double-next
// --double-prev

function transform(arr) {
  let newArr = [];
  if (!Array.isArray(arr)) {
    return "'arr' parameter must be an instance of the Array!";
  }
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    if (arr[i] === "--discard-next") {
      newArr.pop();
      if (i !== arr.length - 1) {
        i = i + 1;
      }
    } else if (arr[i] === "--discard-prev") {
      newArr.pop();
      if (i !== 0) {
        newArr.pop();
      }
    } else if (arr[i] === "--double-next") {
      newArr.pop();
      if (i !== arr.length - 1) {
        newArr.push(arr[i + 1]);
      }
    } else if (arr[i] === "--double-prev") {
      newArr.pop();
      if (i !== 0) {
        newArr.push(arr[i - 1]);
      }
    }
  }
  return newArr;
}

module.exports = {
  transform,
};
