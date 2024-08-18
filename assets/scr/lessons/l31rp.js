// Lesson 31 : Reference and primitive values
console.log("Reference and primitive values");

// Primitive Values
let usMe = "Hello";

//overwrite
usMe = "Hey";

// This will concat and add to the string
// But its not editing its *adding*
usMe = usMe.concat("***");
console.log(usMe);

// ------------

const hob1 = ["Sports", "Cooking"];
hob1.push("jans");
console.log(hob1);
