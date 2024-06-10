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

function convertEntities(str: string): string {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (entities[str[i]]) {
      newStr += entities[str[i]];
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(convertEntities("&lt;script&gt;alert('XSS');&lt;/script&gt;"));
