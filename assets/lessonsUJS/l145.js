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
for (const m of mvm1) {
  if (m > 0) {
    console.log(`Credit ${m}`);
  } else {
    console.log(`Debit ${m}`);
  }
}
