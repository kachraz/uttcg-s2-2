// Objets and classes

console.log(`
---
Objects and classes
---
`);

// const userName = "ina";
// const userAge = "22";

const user = {
  name: "Ina",
  age: 22,
  greet() {
    // adding method in the object
    console.log("Fuku");
    console.log(this.age);
  },
};

// printing it as as table
console.table(user);

// Dot notation access to the object key
console.log(user.age);

// calling the object
user.greet();

// Creating class
