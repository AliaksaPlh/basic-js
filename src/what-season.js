const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  try {
    if (!isDateValid(date)) {
      throw new Error("Invalid date!");
    }

    let month = date.getMonth();
    if (month <= 1 || month == 11) {
      return "winter";
    } else if (month <= 4) {
      return "spring";
    } else if (month <= 7) {
      return "summer";
    } else if (month <= 10) {
      return "autumn";
    }
  } catch (error) {
    throw new Error("Invalid date!");
  }
}

function isDateValid(dateStr) {
  return (
    !isNaN(new Date(dateStr)) &&
    dateStr instanceof Date &&
    Object.prototype.toString.call(dateStr) === "[object Date]" &&
    typeof dateStr.getMonth === "function" &&
    dateStr.getFullYear() === new Date(dateStr).getFullYear()
  );
}

module.exports = {
  getSeason,
};
