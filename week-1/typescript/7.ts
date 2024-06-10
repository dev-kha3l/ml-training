/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
 * @param {number} num The number to check.
 * @throws {Error} If the number is not an integer.
 */
function checkInteger(num: number): void {
  if (typeof num !== "number") {
    throw new Error("The parameter must be a number.");
  }
  if (num % 1 !== 0) {
    throw new Error("The parameter must be an integer.");
  }
}

checkInteger(1);
checkInteger(2.5);
checkInteger("3"); // Error: The parameter must be a number.
checkInteger(NaN); // Error: The parameter must be a number.
checkInteger(Infinity); // Error: The parameter must be a number.
