/**
 * Write a function that accepts 2 numbers as parameters and throws a custom 'Error' if the second number is 0
 * @param {number} num1 The first number to check.
 * @param {number} num2 The second number to check.
 * @throws {Error} If the second number is 0.
 */
function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error("The second number cannot be 0.");
  }
  return num1 / num2;
}
console.log(divide(5, 10));
