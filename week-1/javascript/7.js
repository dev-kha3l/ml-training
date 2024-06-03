/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
 * @param {number} num The number to check.
 * @throws {Error} If the number is not an integer.
 */

function checkIfInteger(num) {
  if (!Number.isInteger(num)) {
    throw new Error(`The value '${num}' is not an integer.`);
  }
}

console.log(checkIfInteger(42));
