/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels removed.
 */

function getVowels(string) {
  const vowels = string.match(/[aeiou]/gi);
  return vowels ? vowels.join("") : "";
}
const inputString = "Get All The Vowels UIIUU";
const vowelsString = getVowels(inputString);
console.log(vowelsString);
