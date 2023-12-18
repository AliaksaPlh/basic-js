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
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  for (let i = 0; i < arr.length; i++) {
    const currentEl = arr[i];
    if (currentEl === "--discard-next") {
      i = i + 1;
    } else if (currentEl === "--discard-prev") {
      if (i !== 0 && arr[i - 2] !== "--discard-next") {
        newArr.pop();
      }
    } else if (currentEl === "--double-next") {
      if (i !== arr.length - 1) {
        newArr.push(arr[i + 1]);
      }
    } else if (currentEl === "--double-prev") {
      if (i !== 0 && arr[i - 2] !== "--discard-next") {
        newArr.push(arr[i - 1]);
      }
    } else {
      newArr.push(currentEl);
    }
  }
  return newArr;
}

module.exports = {
  transform,
};
