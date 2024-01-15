// functions
// block of code which performs specific operation

// reduces code repetition
// enhances code reuse

// function functionName(){
// some code here
// }

// function sayHello(studentName) {
//   console.log(`Hello ${studentName}`);
// }

// sayHello("Reedam");

// function getSum(num1, num2) {
//   let sum = num1 + num2;

//   console.log(sum);
// }

// getSum(40, 50);

// getSum(77, 33);

//? WAF that multiplies three numbers

// function calculateProduct(x, y, z) {
//   let product = x * y * z;

//   console.log(product);
// }

// calculateProduct(3, 4, 5);

//? WAF that checks if provided number is odd or even
// function checkOddOrEven(num) {
//   let remainder = num % 2;

//   if (remainder === 0) {
//     console.log(`${num} is even`);
//   } else {
//     console.log(`${num} is odd`);
//   }
// }

// checkOddOrEven(11);

// Write a function that takes a number and
// prints value from 0 to that number (use while loop).

// function printValues(num) {
//   for (let i = 0; i <= num; i++) {
//     console.log(i);
//   }
// }

// printValues(15);

// Write a function that takes “add”/“subtract”/”multiply”/”divide” and
//  two numbers as parameters and perform appropriate operations.

// function calculator(option, num1, num2) {
//   if (option === "add") {
//     console.log(num1 + num2);
//   } else if (option === "subtract") {
//     console.log(num1 - num2);
//   } else if (option === "multiply") {
//     console.log(num1 * num2);
//   } else if (option === "divide") {
//     console.log(num1 / num2);
//   } else {
//     console.log("Invalid option");
//   }
// }

// calculator("multiply", 10, 3);

// Write a function that takes 5 numbers
// and calculates the average of the provided numbers.

// function calculateAverage(a, b, c, d, e) {
//   //parameter
//   const sum = a + b + c + d + e;

//   const avg = sum / 5;

//   return avg;
// }

// console.log(calculateAverage(10, 20, 30, 40, 50)); //argument => concrete  value

// const result = calculateAverage(10, 20, 30, 40, 50); //30
// console.log(result);

// function sayHi() {
//   return [11, 22];
// }

// const result = sayHi();
// console.log(result);

// WAF that converts dollars into cents
// cent = dollar *100

// function convertDollarToCents(dollar) {
//   const cents = dollar * 100;

//   return cents;
// }

// const result = convertDollarToCents(15);
// console.log(result);

// WAF that converts Rupees to Paisa

// function convertRupeeToPaisa(rs) {
//   let paisa = rs * 100;

//   return paisa;
// }

// let result = convertRupeeToPaisa(7);
// console.log(result);

// let rs = 5;

// let paisa = 0; //500

// function rupeesToPaisa() {
//   paisa = rs * 100;
// }

// rupeesToPaisa();
// console.log(paisa);

// let sum = 0;

// function getSum(num) {
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
// }

// getSum(10);
// console.log(first)

// alternative code

// function getSum(num) {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }

//   return sum;
// }

// const result = getSum(10);
// console.log(result);

// WAF that converts temperature in Celsius into Fahrenheit.

// function convertCelsiusToFahrenheit(celsius) {
//   let fahrenheit = (9 * celsius) / 5 + 32;

//   return fahrenheit;
// }

// let fahrenheit = convertCelsiusToFahrenheit(-40);
// console.log(fahrenheit);

// function printValues(startValue, endValue) {
//   if (startValue > endValue) {
//     console.log("Start value must be less than end value");
//     return;
//   }

//   for (let i = startValue; i <= endValue; i++) {
//     console.log(i);
//   }
// }

// printValues(-20, 0);
