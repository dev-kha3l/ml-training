/**
 * Write a function that accepts a string as input and swaps the case of each character in the string.
 *
 * Example:
 * - swapCase("Hello World") should return "hELLO wORLD"
 *
 * @param {string} str
 * @returns {string}
 */

function swapCase(str: string): string {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }

  return newStr;
}

console.log(swapCase("Hello World"));
