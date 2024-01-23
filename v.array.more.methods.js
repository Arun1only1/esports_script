// find => returns first matching item based on condition

// const scores = [2, 4, 5, 7, 8, 9, 11, 23, 99, 101, 111, 16];

// const newScores = scores.filter((item, index, self) => {
//   if (item > 15) {
//     return item;
//   }
// });

// console.log(newScores);

// const students = ["Suresh", "Kamal", "Laxman"];

// const requiredStudent = students.find((item) => {
//   if (item === "Kamalesh") {
//     return item;
//   }
// });

// console.log(requiredStudent);

// const newStudents = students.map((item) => {
//   if (item === "Kamal") {
//     return "Rajan";
//   } else {
//     return item;
//   }
// });

// console.log(newStudents);

// ?push,pop, map, filter,find
// const nations = ["Nepal", "India", "China"];

// ?push
// nations.push("Thailand");

// console.log(nations);

// ?pop
// nations.pop();

// console.log(nations);

// ? map => changes array content
const prices = [100, 150, 177, 95, 66];

// const newPrices = prices.map((item, index, self) => {
//   let newItem = item - 20;

//   return newItem;
// });

// console.log(newPrices);

// const newPrices = prices.map((item) => {
//   if (item === 150) {
//     let newItem = item + 100;

//     return newItem;
//   } else {
//     return item;
//   }
// });

// console.log(newPrices);

// const studentData = [
//   {
//     name: "A",
//     score: 85,
//   },
//   {
//     name: "B",
//     score: 91,
//   },
//   {
//     name: "C",
//     score: 75,
//   },
// ];
// const newData = studentData.map((item, index, self) => {
//   let newScore = item.score + 5;

//   let newItem = { ...item, score: newScore };

//   return newItem;
// });

// console.log(newData);

// ? filter
// ? scores greater than or equals to 32
// const marksList = [25, 14, 17, 32, 37, 38, 45, 3, 7, 9, 87, 33];

// const newMarksList = marksList.filter((item, index, self) => {
//   if (item >= 32) {
//     return item;
//   }
// });

// console.log(newMarksList);

//? score greater than 80
// const studentData = [
//   {
//     name: "A",
//     score: 85,
//   },
//   {
//     name: "B",
//     score: 91,
//   },
//   {
//     name: "C",
//     score: 75,
//   },
// ];
//? score greater than 80

// const newStudentData = studentData.filter((item, index, self) => {
//   if (item.score > 80) {
//     return item;
//   }
// });

// console.log(newStudentData);

// ? sort => dictionary order
// const nameList = [
//   "Nepal",
//   "India",
//   "China",
//   "Bhutan",
//   "America",
//   "Zimbabwe",
//   "Australia",
//   "Argentina",
// ];

// nameList.sort();

// console.log(nameList);

// ? for numeric array
const nums = [1, 25, 100, 125, 22, 266, 277, 11111];

// a-b => ascending sort
// b-a => descending sort
nums.sort((a, b) => {
  return b - a;
});

console.log(nums);
