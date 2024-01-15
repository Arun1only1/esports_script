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

const checkOddOrEven = (num) => {
  let remainder = num % 2;

  let result;

  if (remainder === 0) {
    result = "even";
  } else {
    result = "odd";
  }

  return result;
};

const result = checkOddOrEven(50);
console.log(result);
