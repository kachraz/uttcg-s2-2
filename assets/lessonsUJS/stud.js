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
