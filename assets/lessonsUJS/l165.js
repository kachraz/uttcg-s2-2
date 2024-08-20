// 150 : Map Filter and Reduce
// Map loops over array and makes anew array

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

wr11(`
More array Methods
---
`);

// Using constructor
let mr1 = new Array(2, 4, 5, 6);
console.log(mr1);

// Generating arrays automatically
let mr2 = new Array(7); // Creati ng an empty array with 7 position
console.log(mr2);

// Fill method on array
mr2.fill(69);
console.log(mr2);

// Making a new array from existing array
let mr4 = Array.from({ length: 71 }, () => 1.4);
console.log(mr4);

// making ana array using index
let mr5 = Array.from({ length: 6 }, (_, i) => i + 1);
console.log(mr5);

// creating a dice roll

let diceRoll1 = Array.from({ length: 10 }, () => Math.random(20));
console.log(diceRoll1);

const diceRoll2 = Array.from(
  { length: 10 },
  () => Math.floor(Math.random() * 6) + 1
);
console.log(diceRoll2);
