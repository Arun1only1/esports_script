// js => functions are treated as first class citizen

// arrow function
// anonymous function => function that does not have name
// () => {};

// const sayHi = (name) => {
//   console.log(`Hi ${name}`);
// };

// sayHi("Rabin");

// const getSum = (num1, num2) => {
//   let sum = num1 + num2;

//   return sum;
// };

// const result = getSum(45, 55);

// console.log(result);

// const getProduct = (x, y) => {
//   const product = x * y;

//   return product;
// };

// const result = getProduct(6, 5);
// console.log(result);

//? Write an arrow function that checks if provided number is odd or even

// const checkOddOrEven = (num) => {
//   let remainder = num % 2;

//   let result;

//   if (remainder === 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }

//   return result;
// };

// const result = checkOddOrEven(50);
// console.log(result);

// arrow functions => concise syntax
// more cleaner and more readable code
// this binding

// const addNumbers = (num1, num2) => {
//   let sum = num1 + num2;

//   return sum;
// };

// const addNumbers = (num1, num2) => num1 + num2;

// const result = addNumbers(10, 25);
// console.log(result);

// ?odd even

// const checkOddOrEven = (num) => (num % 2 === 0 ? "even" : "odd");

// const result = checkOddOrEven(5);
// console.log(result);

// Write an arrow function that prints average of any three numbers
// const calculateAverage = (a, b, c) => ((a + b + c) / 3).toFixed(2);

// const average = calculateAverage(4, 7, 9);
// console.log(average);

// ?WAF that calculates the factorial of a number using arrow function
// 5! => 5*4*3*2*1

// const getFactorial = (num) => {
//   let factorial = 1;

//   for (let i = 1; i <= num; i++) {
//     // factorial *= i; // x = x*i

//     factorial = factorial * i;
//   }

//   return factorial;
// };

// const factorial = getFactorial(5);
// console.log(factorial);

// ? WAF that accepts first name and last name as argument and returns full name

// const getFullName = (firstName, lastName) => {
//   let fullName = `${firstName} ${lastName}`;

//   return fullName;
// };

// const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// const fullName = getFullName("Rohan", "Bhandari");
// console.log(fullName);

//  TODO: WAF that takes "Bearer abcd12345" as argument and return "abcd12345"
