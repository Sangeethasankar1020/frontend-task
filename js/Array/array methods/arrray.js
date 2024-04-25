// Array create
// 1
let firstArray = ["aa", 21, true, 8997656745];
console.log(firstArray, "first Method");
// 2
let secArray = new Array("Sangeema", 22);
console.log(secArray, " Second method");
// 3
let thirdArray = [];
thirdArray[0] = "Gayu";
thirdArray[1] = 23;
console.log(thirdArray, "third Method");

// Array Methods

let cartoon = ["Shinchan", "chotta bheem", "Tian Tian", "Dora"];
// Array length
console.log(cartoon.length, "Length of array");
// to string
console.log(cartoon.toString(), "to string");
// at
console.log(cartoon.at(2), "at");
// pop
console.log(cartoon.pop(), "pop - remove last element");
// push
console.log(cartoon.push("gloriya"), "push ");
console.log(cartoon, " new push ");
// join
console.log(cartoon.join("*"), "join");
//shift - remove first element
console.log(cartoon.shift("Shinchan"), "shift");
// unshift - add first
console.log(cartoon.unshift("Shinchan"), "unshift");
console.log(cartoon, " new un shift ");
// changing
console.log((cartoon[0] = "gloriyavin"), "changing");
console.log(cartoon, " new changing");

// concat - merge two array

let food = ["full meals", "briyani"];
let sideDish = ["chips", "onion"];
console.log(food.concat(sideDish), "concat ");
//delet - undefined
console.log(delete food[0], "delete");
// copy within
console.log(cartoon.copyWithin(2, 0), "copy within ");
// flat
let flatArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(flatArray.flat(), "flat");
// splice
console.log(cartoon.splice(2, 0, "zero", "hero"), "splice");
console.log(cartoon, "splice");
// slice
console.log(cartoon.slice(1), "slice");
console.log(cartoon, "slice");
