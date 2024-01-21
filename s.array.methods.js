// let studentList = ["Prithvi", "Diom", "Diwash"];

// ?push => adds element to end of array
// studentList.push("Arun");
// studentList.push("Rina", "Sona");

// console.log(studentList);

// ? pop => removes last item from array
// studentList.pop();
// console.log(studentList);

// ? unshift => adds item to start of array

// studentList.unshift("Rajan", "Suresh");
// studentList.unshift("Manish");
// console.log(studentList);

// let studentList = ["Prithvi", "Diom", "Diwash"];

// ?shift => removes item from start of array

// studentList.shift();

// console.log(studentList);

// ? map
// ? is used to change items and return new array
// original array and returned array has same length/size
// const scores = [25, 35, 45, 55, 65, 75];

// // newScores = [15]
// const newScores = scores.map((item, index, self) => {
//   let newScore = item - 10;

//   return newScore;
// });

// console.log(newScores);

// const marks = [30, 42, 55, 72, 91];

// const newMarkList = marks.map((item) => item - 10);

// console.log(newMarkList);

// const nameList = ["Suman", "Prabeen", "Enish", "Nischal"];

// let newNameList = nameList.map((item) => {
//   if (item === "Enish") {
//     return item;
//   }
//   let newItem = item.toLowerCase();
//   return newItem;
// });

// console.log(newNameList);

// ? filter, find,slice,splice,some,every,sort

// ? filter => filters out values from array based upon condition
// ? original array and
// ?returned array has max probability of having different size

// ? returns array

// const numList = [11, 25, 75, -10, -15, -25, -1, 45, -27];

// const newNumList = numList.filter((item, index, self) => {
//   return item < 0;
// });

// console.log(newNumList);

//
// ?get an array with even scores
// ? delete odd numbers
// ?const scoreList = [25, 26, 78, 79, 35, 45, 47, 55];

// const scoreList = [25, 26, 78, 79, 35, 45, 47, 55];
// const newScoreList = scoreList.filter((item) => item % 2 === 0);

// console.log(newScoreList);
// ? assignment
let laptopList = [
  {
    name: "TUF F15",
    brand: "asus",
    price: 1044,
  },
  {
    name: "GF63",
    brand: "msi",
    price: 900,
  },
  {
    name: "macbook air m2",
    brand: "apple",
    price: 1400,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 800,
  },

  {
    name: "inspiron 55",
    brand: "dell",
    price: 700,
  },
];

// ? due to sudden rise in tax, add 10% to the price of each laptop

const newLaptopList = laptopList.map((item, index, self) => {
  let newPrice = item.price + 0.1 * item.price;

  let newItem = {
    ...item,
    price: newPrice, //replaces price with newPrice
  };

  return newItem;
});

console.log(newLaptopList);

// ? decrease price of each laptop by 20 percent

// ? remove laptops whose price is greater than 1000

// ? remove laptops whose brand is apple

// ? increase price of asus laptop by 5%
