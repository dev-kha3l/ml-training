/**
 * Write a function that converts HTML entities to their corresponding characters.
 * @param {string} str The string to convert.
 * @return {string} The string with HTML entities converted to their corresponding characters.
 */

// ENTITY OBJECT
const entities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};
function convertHtmlEntities(string) {
  return string.replace(/[&<>"']/g, (match) => entities[match]);
}

const input = "<, >, &, \", and '.";
const output = convertHtmlEntities(input);
console.log(output);
