console.log(`
---
UJS - Arrays 
---
`);
console.log(`
==========================
==========================
==========================
`);

// === utility function
function wr11(tx1) {
  console.log(
    `%c
    ---
    ${tx1}
    ---
    `,
    "color:#0ea5e9; font-size: 1rem"
  );
}

console.log(`
---
143: Simple array Methods
--
`);

let arr = ["a", "b", "c", "d", "e"];

console.log(arr);

// Slice method

arS1 = arr.slice(2);
console.log(`
Slicing the array
`);
console.log(arS1);

// slicing with start and end

ars2 = arr.slice(2, 4);
console.log(`Slicing start and end`);
console.log(ars2);

// Negative start parameters also has the start end paramters
ars3 = arr.slice(-2);
ars31 = arr.slice(-2, -1);
wr11("Slicing from reverse");
console.log(ars3);
console.log(ars31);

// Creating a shadow copy
wr11("Creating a shadow copy");
ars4 = arr.slice();
console.log(ars4.slice());

// Splice method - Mutates the array
arSp1 = arr.slice();
wr11("Splicing");
console.log(arSp1.splice(-3));
console.log(`Printing the original array`);
console.log(arSp1);

// Most common is to remove the last element
// Without beginning and end params

// Reverse the array - Note use meaningful names
// Mutates the array
let arr2 = ["a", "b", "c"];
let arR2 = arr2.slice();
let arR3 = arR2.reverse();

wr11("Reversing the array");
console.log(`
Original Array  = ${arr2}
Reversed Array  = ${arR3}
`);

// concat method
wr11("Concat they array");
const letter1 = arR3.concat(arr);
console.log(letter1);

// above operation can be done with spread oprator
wr11("Using the spread operator");
let conc1 = arR3.concat(arr);
console.log([...arr, ...conc1]);
