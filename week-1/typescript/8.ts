/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels removed.
 */

function removeVowels(str: string): string {
  const vowels = ["a", "e", "i", "o", "u"];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) === -1) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(removeVowels("hello world"));
