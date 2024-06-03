/**
 * Write a function that accepts a string as input and swaps the case of each character in the string.
 *
 * Example:
 * - swapCase("Hello World") should return "hELLO wORLD"
 *
 * @param {string} str
 * @returns {string}
 */
const swapCase = (str) => {
  return str
    .split("")
    .map((char) => char.toUpperCase())
    .join("");
};

console.log(swapCase("Hello World"));
