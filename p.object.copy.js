// object copy
// let x = 2;

// let y = x;

// console.log(y);

const laptop1 = {
  name: "Mac book Pro",
  brand: "Apple",
  model: 2023,
  storage: {
    ram: 18,
    ssd: 512,
  },
};

// ? shallow copy
// copy by value, copy by reference
// const laptop2 = laptop1; //reference

// laptop2.name = "Asus TUF";

// console.log(laptop1);

// ? spread operator (...)
// const laptop2 = { ...laptop1 };

// laptop2.name = "Asus TUF";
// laptop2.storage.ram = 8;
// console.log(laptop1);

// ? structuredClone (deep copy)

// const laptop2 = structuredClone(laptop1);

// laptop2.name = "A";
// laptop2.storage.ssd = 1500;
// console.log(laptop1);
