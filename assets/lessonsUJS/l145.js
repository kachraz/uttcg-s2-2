// 145: For each method

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

wr11("Array Looping");
const mvm1 = [200, 450, -400, 3000, -650, -130, 0, 130, 267, 300];

// Using an for off loop to identify elements in the array
// for (const m of mvm1) {
//   if (m > 0) {
//     console.log(`Credit ${m}`);
//   } else {
//     console.log(`Debit ${m}`);
//   }
// }

// For each method
wr11("For Each Method");
// mvm1.forEach(function (m) {
//   if (m > 0) {
//     console.log(`Credit ${m}`);
//   } else {
//     console.log(`Debit ${m}`);
//   }
// });

wr11("Using Counter");
// for (const [i, m] of mvm1.entries()) {
//   if (m > 0) {
//     console.log(`${i + 1} Credit ${m}`);
//   } else {
//     console.log(`${i + 1} Debit ${m}`);
//   }
// }

wr11("Using Counter - Using For each method");
mvm1.forEach(function (m, i, a) {
  if (m > 0) {
    console.log(`${a} - ${i} Credit ${m}`);
  } else {
    console.log(`${a} - ${i} Debit ${m}`);
  }
});
