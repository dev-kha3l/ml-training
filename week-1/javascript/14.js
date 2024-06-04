/**
 * Write a function that accepts an array of numbers and displays the highest and lowest numbers in the array.
 * @param {number[]} arr The array of numbers.
 * @return {string} The highest and lowest numbers in the array.
 *
 * Example array: [5, 2, 8, 1, 9, 3]
 * Expected output: "The lowest number is 1 and the highest number is 9."
 */

function findHighestAndLowest(arr) {
  const lowest = Math.min(...arr);
  const highest = Math.max(...arr);
  return `The lowest number is ${lowest} and the highest number is ${highest}.`;
}

const numbers = [5, 2, 8, 1, 9, 3];
const result = findHighestAndLowest(numbers);
console.log(result);
