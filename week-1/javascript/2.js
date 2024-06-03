/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */

function arraySum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
const number = [21, 22, 23, 24];
const result = arraySum(number);
console.log(result);
