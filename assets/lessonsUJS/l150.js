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

// wr11("Arrays Methods - Map Filter Reduce");

// Working with the Data from JS
const mvm1 = [200, 450, -400, 3000, -650, -130, 20, 130, 267, 300];

// // Converting the above usd -> eur
// const eu2USD = 1.1;

// const mvCon = mvm1.map(function (m) {
//   return m * eu2USD;
// });

// console.log(mvCon);

// // Writing the above with for of loop
// const mvCo2 = [];
// wr11("Using for method");
// for (const m of mvm1) mvCo2.push(m * eu2USD);
// console.log(mvCo2);

// // usign arrow functions
// wr11("Using Arrow Function");
// const mvC3 = mvm1.map((m) => m * eu2USD);
// console.table(mvC3);

// map methods - Index and array
// wr11("Using More map methods ");
// const mvDesc = mvm1.map(
//   (m, i, a) => `Mov ${i + 1}:  ${m > 0 ? "✅" : "❌"}  ${Math.abs(m)}`
// );
// console.log(mvDesc);

// Working with filter
// wr11("Filter method");
// console.log("Movements Array");
// console.log(mvm1);

// wr11("Filter with foreach method");
// const dep = mvm1.filter(function (m) {
//   return m > 0;
// });
// console.log(dep);

// wRITE ABOVE as an arrow function
// console.log("Writing the above function as an arrow function");
// const dep2 = mvm1.filter((m) => m > 0);
// console.log(dep2);

// wr11("Reduce method");

// /*
// accumulator will collect all the values by performing the action
// on every element of the array , and the 1000 is the initial value
// */

// const oneReducedValue = mvm1.reduce(
//   (accumulator, movements, index, array) => accumulator + movements,
//   1000
// );
// console.log(oneReducedValue);

wr11("Chaining Array Methods");

// Chaining will work only when the first operation
// Also returns an array
const cha1 = mvm1
  .filter((m) => m > 0)
  .map((m) => m * 1.012544)
  .reduce((a, m) => a * m);
console.log(cha1);
