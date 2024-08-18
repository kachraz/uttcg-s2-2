// 146: For Each Loop with maps

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

// Array of arrays , innner array is the map object , K and V

wr11("foreach Loop with maps an sets ");

const cur1 = new Map([
  ["USD", "dolla"],
  ["EUR", "uro"],
  ["GPB", "punda"],
]);

wr11("Map Object for work");
console.log(cur1);

wr11("ForEachLoop to print ley and value");
cur1.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

wr11("Working with set");

const cuU1 = new Set(["ADA", "BTC", "XMR", "ADA"]);
console.log(cuU1);

// Calling for each method -
// Sets has no keys and indexes
cuU1.forEach(function (v, k, m) {
  console.log(`${k} : ${v}`);
});
