//1. Find Max element in an array.
const array = [3, 7, 2, 8, 4, 9, 5];
let max = array[0]; 
for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i]; 
  }
}
console.log(array, max, " maximum number in a array");

// 2.Min element in an array
const Minarray = [3, 7, 2, 8, 4, 9, 5];
let min = array[0];
for (let i = 1; i < array.length; i++) {
  if (Minarray[i] > max) {
    min = Minarrayy[i];
  }
}
console.log(Minarray, min, " minimum number in a array");

// 3. sum of elements in a array
const m = [3, 3, 2, 2]
let sum = 0
for (i = 0; i < m.length; i++){
    sum = sum + m[i];
}
console.log(m, sum, "sum of array")

// 4.Push odd and even numbers in separate array
let k = [2, 3, 4, 5, 6, 6, 9]
const evenNumbers = [];
const oddNumbers = [];
for (i = 0; i < k.length; i++) {
  if (k[i] % 2 == 0) {
    evenNumbers.push(k[i]);
  } else {
    oddNumbers.push(k[i]);
  }
}
console.log( evenNumbers,"Even numbers");
console.log(oddNumbers, "Odd numbers");
// 5. reverse a array
let d = [1, 2, 2, 39, 8]
let ReverseArray = []
for (i = d.length-1; i >=0; i--){
    ReverseArray.push(d[i]);
}
console.log(d,ReverseArray)