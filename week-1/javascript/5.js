/**
 * Write a function that converts temperature in Celsius to Fahrenheit.
 * Expected output: 60°C = 140°F.
 * @param {number} celsius The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const celsiusTemperature = 60;
const fahrenheitTemperature = convertCelsiusToFahrenheit(celsiusTemperature);

console.log(`${celsiusTemperature}°C = ${fahrenheitTemperature}°F`);
