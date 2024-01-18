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

// const courseDetails = {
//   name: "MERN",
//   duration: 90,
//   type: "Full stack",
//   numberOfStudents: 16,
// };

// ?Read operations
// ?dot operator and square operator
// console.log(courseDetails.name);
// console.log(courseDetails.numberOfStudents);
// console.log(courseDetails["duration"]);

// console.log(courseDetails.type);
// console.log(courseDetails["type"]);

// ? Delete operation => removes specified property
// delete courseDetails.type;
// delete courseDetails["type"];
// console.log(courseDetails);

// const countryDetails = {
//   population: "3cr",
//   states: 7,
//   districts: 77,
//   name: "Nepal",
//   localAdministration: 753,
//   isRepublic: true,
//   isSecular: true,
//   famousPlace: "Lumbini",
// };

// ? upsert => update or insert
// ? update
// countryDetails.name = "India";
// countryDetails["states"] = 28;
// console.log(countryDetails);

//? add
// console.log(countryDetails);
// countryDetails.gdp = "2 million";
// console.log(countryDetails);

// console.log(countryDetails.name);
// console.log(countryDetails["isRepublic"]);

// delete countryDetails.isSecular;
// console.log(countryDetails);

//
const laptopDetails = {
  name: "GF75",
  brand: "MSI",
  ram: 16,
  ssd: 512,
  display: "15.3",
  graphics: "NVIDIA GeForce RTX 3060",
  battery: "51 Whr",
  processor: "i7 10750H",
};

// ? display laptop name with battery capacity
// GF75 has 51Whr battery.
// console.log(`${laptopDetails.name} has ${laptopDetails.battery} battery.`);

// ?change ram size to 18 gigs
// laptopDetails.ram = 18;
// laptopDetails["ram"] = 18;
// console.log(laptopDetails);

// ?add another property called  memoryFrequency with 3200MHz value
// laptopDetails["memoryFrequency"] = "3200MHz";
// console.log(laptopDetails);

// ? add another property called weight whose value is 3kg

// laptopDetails.weight = "3kg";
// console.log(laptopDetails);

// ? update ssd size by 300 GB
// laptopDetails.ssd = laptopDetails.ssd + 300;
// laptopDetails.ssd += 300;

// console.log(laptopDetails);

// ?delete processor property
// delete laptopDetails.processor;
// console.log(laptopDetails);

// ? assignment question 2
// 2.Create an object named myHouseDetails and add following properties
// numberOfRooms
// numberOfMembers
// colorOfHouse
// builtYear
// numberOfStorey

// A.Delete numberOfMembers property
// B.Update numberOfRooms by new value
// C.Add a  new property called estimatedPriceOfHouse
// D.Print out all properties on the console like “I have a green coloured house        with 9 rooms where 10 people are  living. The house is 3 storey and was built in 2011 with an estimated budget of 2 crores.”

// const myHouseDetails = {
//   numberOfRooms: 20,
//   numberOfMembers: 7,
//   colorOfHouse: "green",
//   builtYear: 1990,
//   numberOfStorey: 5,
// };

// delete myHouseDetails.numberOfMembers;

// myHouseDetails["numberOfRooms"] = 30;
// myHouseDetails.numberOfRooms = 30;
// console.log(myHouseDetails);

// myHouseDetails.estimatedPriceOfHouse = "4cr";

// console.log(myHouseDetails);

// console.log(
//   `I have a ${myHouseDetails.colorOfHouse} coloured house with ${myHouseDetails.numberOfRooms} rooms.`
// );

// ? nested object

// const studentDetails = {
//   firstName: "Rohan",
//   lastName: "Bhandari",
//   age: 22,
//   college: "Missouri State University",
//   address: {
//     temporary: "St. Louis",
//     permanent: "Kathmandu",
//   },
// };

// console.log(studentDetails.address.temporary);
// console.log(studentDetails["address"]["temporary"]);

// console.log(studentDetails["address"].temporary);
// console.log(studentDetails.address["temporary"]);

// studentDetails.address.permanent = "Missouri";
// studentDetails["address"]["permanent"] = "Kansas";

// console.log(studentDetails);

// 5. hospital Details
// add field => name,location,patientCapacity, numberOfBed, numberOfBlock,
// numberOfDoctor,numberOfNurse
// delete numberOfBed and numberOfNurse
// update numberOfBlock
// add new field named numberOfAmbulance
// copy the object to new variable named newHospitalDetails
// print out results like "There is a hospital named ABC with...."

const hospitalDetails = {
  name: "Patan Academy",
  location: "Lalitpur",
  patientCapacity: 500,
};
