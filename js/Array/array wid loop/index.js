// for
let data = ["age", "name", "qualification", "position"];
for (let i = 0; i < data.length; i++) {
  console.log(data[i], "for ");
}
// for of
for (let information of data) {
  console.log(information, "for of");
}
// for in
let fruits = ["apple", "banana", "cherry", "date"];
for (let index in fruits) {
  console.log(fruits[index], " for in ");
}
// ternary operator
let age = 18;
let Tenaryop = age >= 18 ? `eligible` : `not eligible`;
console.log(Tenaryop, "Tenary operator");
