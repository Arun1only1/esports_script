// ? array copy

const scores = [25, 35, 45, 55];

// address copy
// const newScores = scores;

// newScores[0] = 20;

// console.log(scores);

// ? spread operator

let newScores = [...scores];

newScores[0] = 5;
console.log(scores);

// ? structuredClone
// ? when array has objects or array inside

// const studentData = [{ name: "A" }, { name: "B" }];

// const newStudentData = structuredClone(studentData);

// newStudentData[0].name = "Z";
// console.log(studentData);
