/**
 * Write a function that merges two arrays into a single array and removes duplicates.
 *
 * Example:
 * - merge([1, 2, 3], [2, 3, 4]) should return [1, 2, 3, 4]
 * - merge([1, 2, 3], [3, 4, 5]) should return [1, 2, 3, 4, 5]
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
const merge = (arr1, arr2) => {
  const merged = [...arr1, ...arr2];
  return [...new Set(merged)];
};

console.log(merge([1, 2, 3], [2, 3, 4]));
console.log(merge([1, 2, 3], [3, 4, 5]));
