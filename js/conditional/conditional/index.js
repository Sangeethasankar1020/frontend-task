//even or odd

// let num = prompt("Enter the number");
// if (num % 2 == 0) {
//   alert("even number");
// } else {
//   alert("odd number");
// }

//number is positive or negative or zero

// let number = prompt("Enter the number");
// if (number > 0) {
//   console.log("positive number");
// } else if (number < 0) {
//   console.log("negative number");
// } else if (number == 0) {
//   console.log("zero");
// } else {
//   console.log("something wrong");
// }

//largest number

// let n1 = prompt("enter n1"),
//   n2 = prompt("enter n2"),
//   n3 = prompt("enter n3");
// if (n1 > n2 && n1 > n3) {
//   console.log("n1 is largest number");
// } else if (n1 < n2 && n2 > n3) {
//   console.log("n2 is largest number");
// } else {
//   console.log("n3 is largest number");
// }

// check leap year

// let year = prompt("enter year");
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log("leap year");
// } else {
//   console.log("Not a leap year");
// }

// check vowels

// let ch = prompt("enter a letter");
// if (ch == "a" || ch == "e" || ch == "i " || ch == "o" || ch == "u") {
//   console.log("your character is vowel");
// } else if (ch != "a" || ch != "e" || ch != "i " || ch != "o" || ch != "u") {
//   console.log("your character is consonent");
// }

// check triangle is equilateral or isosceles

// let x = prompt("Enter value of x"),
//   y = prompt("Enter value of y"),
//   z = prompt("Enter value of z");
// if (x == y && y == z) {
//   console.log("Equilateral Triangle");
// } else if (x == y || y == z || z == x) {
//   console.log("isosceles Triangle");
// }

// grade system based on student marks

// let mark = prompt("Enter your mark");
// if (mark >= 490 && mark <= 500) {
//   console.log("A grade");
// } else if (mark >= 480 && mark <= 490) {
//   console.log("B grade");
// } else if (mark >= 470 && mark <= 480) {
//   console.log("C grade");
// } else if (mark >= 450 && mark <= 470) {
//   console.log("D grade");
// } else if (mark >= 500) {
//   console.log("something wrong");
// } else {
//   console.log("E grade");
// }

// Login task

var userName = prompt("Enter your user Name"),
  Password = prompt("Enter your Password");
var Name = "Sangeetha",
  password = "Sangeetha@2001";
if (userName == Name && Password == password) {
  alert("successfully login");
} else {
  alert("Enter valid username and password");
}
