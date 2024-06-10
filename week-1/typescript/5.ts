/**
 * Write a function that converts temperature in Celsius to Fahrenheit.
 * Expected output: 60°C = 140°F.
 * @param {number} celsius The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */

function celsiusToFahrenheit(celsius: number): number {
  return celsius * 1.8 + 32;
}

console.log(celsiusToFahrenheit(60));
