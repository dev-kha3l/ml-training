/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is less than 0
 * @param {number} num The number to check.
 * @throws {Error} If the number is not a positive integer.
 */
function checkPositiveInt(num) {
  if (!Number.isInteger(num) || num < 0) {
    throw new Error(`The value '${num}' is not a positive integer.`);
  }
}
console.log(checkPositiveInt(-2));
