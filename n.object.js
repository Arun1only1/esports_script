// object => key value pair

// primitive data types
// string
// number
// boolean
// undefined
// null

// non-primitive
// object => key value pair
// key is also called property
// grouping of primitive data types
// let student1 = {
//   firstName: "Suresh",
//   lastName: "Shah",
//   college: "Broadway",
//   age: 22,
//   permanentAddress: "Ktm",
//   temporaryAddress: "Bkt",
//   isMarried: false,
//   isGraduated: null,
//   height: undefined,
// };

// console.log(student1);
// console.log(typeof student1); // object

// ?CRUD
// C => Create/ Add
// R => Read/ Retrieve
// U => Update/Edit
// D => Delete /Remove

const courseDetails = {
  name: "MERN",
  duration: 90,
  type: "Full stack",
  numberOfStudents: 16,
};

// ?Read operations
// ?dot operator and square operator
// console.log(courseDetails.name);
// console.log(courseDetails.numberOfStudents);
// console.log(courseDetails["duration"]);

// console.log(courseDetails.type);
// console.log(courseDetails["type"]);

// ? Delete operation => removes specified property
// delete courseDetails.type;
delete courseDetails["type"];
console.log(courseDetails);
