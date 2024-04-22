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

// array with looping

var num = [23, 45, 2, 76, 56];
for (let i = 0; i < num.length; i++) {
  console.log(num[i], i, "for loop");
}

for (let data of num) {
  console.log(data, "for of loop");
}

for (let items in num) {
  console.log(num[items], "items"); // it returns index
}

var age = 17;
var Ternarydata = age >= 18 ? "eligible" : "not eligible";
console.log(Ternarydata, "Ternarydata");

var a = -0;
var data = a >= 0 ? a == 0 ? "the value is 0"  : "the value is +ve" : "the value is -ve";
console.log(data, "data");
