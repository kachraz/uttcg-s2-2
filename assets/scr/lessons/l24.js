// Lesson 24: Destructuring

console.log("Lesson 24: Destructuring");

const userNameData = ["Ina", "Pina"];

// index to access data
const fiNa = userNameData[0];
const fiNa2 = userNameData[1];

// Shortening above data
const [fina2, fina3] = ["fina", "mina"];
console.log(fina2);
console.log(fina3);

// destructuning for objects

const us1 = {
  name: "gin",
  spec: "panty",
};

// accessing the elements of the object
const us1Name = us1.name;
const us1Spec = us1.spec;

console.log(`
Printing : 

1. Object = ${us1}
2. Object elements : ${us1Name} , ${us1Spec}
`);

// Easier way of access of above
// for object , you have to pull by property name
const { name: dina, what: fin } = {
  name: "Pina",
  what: "Smell",
};
console.log(dina, fin);
