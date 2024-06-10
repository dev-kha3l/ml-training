/**
 * Write a function that accepts an array of numbers and displays the highest and lowest numbers in the array.
 * @param {number[]} arr The array of numbers.
 * @return {string} The highest and lowest numbers in the array.
 *
 * Example array: [5, 2, 8, 1, 9, 3]
 * Expected output: "The lowest number is 1 and the highest number is 9."
 */

function getHighestAndLowestNumbers(arr: number[]): string {
  let highest = arr[0];
  let lowest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
    if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }
  return `The lowest number is ${lowest} and the highest number is ${highest}.`;
}

console.log(getHighestAndLowestNumbers([5, 2, 8, 1, 9, 3]));
