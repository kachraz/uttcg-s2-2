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

wr11("Arrays Methods - Map Filter Reduce");

// Working with the Data from JS
const mvm1 = [200, 450, -400, 3000, -650, -130, 20, 130, 267, 300];

// Converting the above usd -> eur
const eu2USD = 1.1;

const mvCon = mvm1.map(function (m) {
  return m * eu2USD;
});

console.log(mvCon);

// Writing the above with for of loop
const mvCo2 = [];
wr11("Using for method");
for (const m of mvm1) mvCo2.push(m * eu2USD);
console.log(mvCo2);
