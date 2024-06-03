/**
 * Write a function that converts Fahrenheit to Celsius.
 * Expected output: 140°F = 60°C.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @return {number} The temperature in Celsius.
 */

function convertFahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
const fahrenheitTemperature = 140;
const celsiusTemperature = convertFahrenheitToCelsius(fahrenheitTemperature);
console.log(`${fahrenheitTemperature}°F = ${celsiusTemperature}°C`);
