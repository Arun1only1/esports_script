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
function checkOddOrEven(num) {
  let remainder = num % 2;

  if (remainder === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

checkOddOrEven(11);
