// ?Create an array called friendsList and add your friends name.
// ? Print out your friend's name one by one.

// const friendList = ["Milan", "Rohan", "Niranjan", "Sameer", "Rohit"];

// friendList.map((item, index, self) => {
//   console.log(item);
// });

// Create an array called favourite sportsPerson and use a for loop
// to print the player's name.
// const sportsPersonList = ["Sompal", "Virat", "Paras", "Ashmina", "Dembele"];

// sportsPersonList.forEach((item, index, self) => {
//   console.log(item);
// });

// Create an array called myFavourite actors and print out who is your best actor among all actors.

// const actorList = ["Tom Hanks", "SRK", "Bhuban KC", "Rajesh Hamal", "Karisma"];

// actorList.forEach((item, index, self) => {
//   if (item === "Tom Hanks") {
//     console.log(`${item} is my fav actor.`);
//   } else {
//     console.log(`${item} Not my fav`);
//   }
// });

// Make an array of numbers that double the items.

// const numList = [10, 20, 30, 1, 2, 3, 4, 5, 6];

// const newNumList = numList.map((item, index, self) => {
//   let newItem = item * 2;

//   return newItem;
// });

// console.log(numList);

// Make an array of numbers and print whether the numbers are odd or even.
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

const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.forEach((item, index, self) => {
  const result = checkOddOrEven(item);

  console.log(`${item} is ${result}`);
});
