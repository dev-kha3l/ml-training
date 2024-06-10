/**
 * Write a function that takes an array of numbers and throws a custom 'Error' if the array is empty.
 * @param {number[]} arr The array to check.
 * @throws {Error} If the array is empty.
 */

function checkNonEmptyArray(arr: number[]): void {
  if (arr.length === 0) {
    throw new Error("The array must not be empty.");
  }
}

checkNonEmptyArray([1, 2, 3]);
checkNonEmptyArray([]); // Error: The array must not be empty.
