/**
 * Write a function that computes the average marks of the following students: Then this average is used to determine the corresponding grade.
 * - John: 90
 * - Jane: 85
 * - Joe: 95
 * - Tom: 65
 * - Nancy: 75
 *
 * Grade computed as follows:
 * < 60 : F
 * 60-69 : D
 * 70-79 : C
 * 80-89 : B
 * >= 90 : A
 * @return {number} The average marks of the students.
 */

const students = [
  { name: "John", mark: 90 },
  { name: "Jane", mark: 85 },
  { name: "Joe", mark: 95 },
  { name: "Tom", mark: 65 },
  { name: "Nancy", mark: 75 },
];
const average = students.reduce((acc, student) => {
  return acc + student.mark;
}, 0);

const grade =
  average >= 90
    ? "A"
    : average >= 80
    ? "B"
    : average >= 70
    ? "C"
    : average >= 60
    ? "D"
    : "F";

console.log(grade); // A
