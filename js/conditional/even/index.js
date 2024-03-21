//even or odd

let num = prompt("Enter the number");
if (num % 2 == 0) {
  alert("even number");
} else {
  alert("odd number");
}

//number is positive or negative or zero

let number = prompt("Enter the number");
if (number > 0) {
  console.log("positive number");
} else if (number < 0) {
  console.log("negative number");
} else if (number == 0) {
  console.log("zero");
} else {
  console.log("something wrong");
}

//largest number

let n1 = prompt("enter n1"),
  n2 = prompt("enter n2"),
  n3 = prompt("enter n3");
if (n1 > n2 && n1 > n3) {
  console.log("n1 is largest number");
} else if (n1 < n2 && n2 > n3) {
  console.log("n2 is largest number");
} else {
  console.log("n3 is largest number");
}

// check leap year

let year = prompt("enter year");
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("leap year");
} else {
  console.log("Not a leap year");
}

// check vowels

// let letter = prompt("enter a letter");
// letter = letter.toLowerCase;
// if (letter == (a || e || i || o || u)) {
//   console.log("your letter is vowel");
// } else {
//   console.log("your letter is consonent");
// }
