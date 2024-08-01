console.log(`
---
Arrays
---
`);

const content = ["hey", "heys"];
console.log(content[0]);

content.push("working");

console.table(content);

const index = content.findIndex((i) => i === "soporrts");
console.log(index);

const hoii = content.map((i) => ({
  text: "item",
}));
console.log(hoii);
