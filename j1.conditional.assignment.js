//? Check if input variable is a number or not

// let x = 0 / 0;
// console.log(x);

// const type = typeof x;

// if (type === "number") {
//   console.log("X is a number");
// } else {
//   console.log("X is Not a Number");
// }

//? Perform arithmetic operation based on the option provided.
// ? Set two variables with numbers.
//?  Create another variable called “option”
// ?  which can be add/subtract/multiply/divide/power.
//? Based upon the value of the option. Perform appropriate operation.
//? e.g. if option is “add”, perform num1+num2

// let num1 = 5;
// let num2 = 3;

// let option = "remainddfadfsasder";

// if (option === "add") {
//   console.log(num1 + num2);
// } else if (option === "subtract") {
//   console.log(num1 - num2);
// } else if (option === "multiply") {
//   console.log(num1 * num2);
// } else if (option === "divide") {
//   console.log(num1 / num2);
// } else if (option === "power") {
//   console.log(num1 ** num2);
// } else if (option === "remainder") {
//   console.log(num1 % num2);
// } else {
//   console.log("Invalid option");
// }

//? Find grades for student marks.
// ?If the mark is greater than or equal to 90, the grade is “A plus”.
// ?If the mark is greater than or equal to 80,the grade is “A”.
// ? Grade “B”  from marks greater than equal to 70.
//? “C” for marks greater than equal to 60.
// ?“F” for marks  less than 60.

let marks = -145;
if (marks > 100 || marks < 0) {
  console.log("Out of range");
} else if (marks >= 90 && marks <= 100) {
  console.log("A +");
} else if (marks >= 80 && marks <= 89) {
  console.log("A");
} else if (marks >= 70 && marks <= 79) {
  console.log("B");
} else if (marks >= 60 && marks <= 69) {
  console.log("C");
} else {
  console.log("Try again, work hard");
}
