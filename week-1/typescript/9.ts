/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is less than 0
 * @param {number} num The number to check.
 * @throws {Error} If the number is not a positive integer.
 */

function checkPositiveInteger(num: number): void {
  if (typeof num !== "number") {
    throw new Error("The parameter must be a number.");
  }
  if (num % 1 !== 0) {
    throw new Error("The parameter must be an integer.");
  }
  if (num < 0) {
    throw new Error("The parameter must be a positive integer.");
  }
}

checkPositiveInteger(1);
checkPositiveInteger(2.5);
checkPositiveInteger("3"); // Error: The parameter must be a number.
checkPositiveInteger(NaN); // Error: The parameter must be a number.
checkPositiveInteger(Infinity); // Error: The parameter must be a number.
checkPositiveInteger(-1); // Error: The parameter must be a positive integer.
checkPositiveInteger(0); // Error: The parameter must be a positive integer.
