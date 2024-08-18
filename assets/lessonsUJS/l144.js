// 144: new at method

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

wr11("At Method1");
const arr = [23, 11, 64, 99, 33];
console.log(arr[0]);

wr11("Extracting with a method");
console.log(arr.at(2));

// particularity - getting the last element of array
wr11("Using at method for removing last element");
console.log(arr.at(-1));

//at method for strings
console.log("jina".at(-1));
