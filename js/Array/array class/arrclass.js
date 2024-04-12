// array
var myArray = ["aaa", 34, true, 945734855]; //1

//
console.log(myArray.pop());
console.log(myArray.length, "length");

console.log(myArray.toString());
console.log(myArray, typeof myArray[1]);

console.log(myArray[0]);

const obj = {};
obj.name = "aaaa";

const arr = []; // 2
arr[0] = "CSE";
console.log(arr, "arr");

//

const obj1 = new Object();
obj1.department = "bdfdj";
console.log(obj1, "obj1");

const arr1 = new Array("cse", "It"); // 3
console.log(arr1, "arr1");

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);
