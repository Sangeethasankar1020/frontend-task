// positive or zero
let l = 0
let PositiveZero = (l == 0) ? `zero` : (l >= 1) ? `positive` : `negative`;
console.log(l,PositiveZero,"Positive/Zero")
// within range/not
let a = 8;
let minRange = 1;
let maxRange = 20;

let withinRange =(a >= minRange && a <= maxRange )? "Within range" : "Outside range";
console.log(a, withinRange, "within range/not");
// min of three number
let x = 10;
let y = 5;
let z = 8;

let min = (x < y )? (x < z ? x : z) : (y < z) ? y : z;
console.log("Minimum of", x, ",", y, ", and", z, "is:", min);
// Check if a number is even or odd without using modulo operator (%) 
let r = 4;
let results = (r & 1) === 0 ? "even" : "odd";
console.log(r, "is", results);
// leap
const Lyear = 2024;
const isLeapYear = (Lyear % 4 === 0 && (Lyear % 100 !== 0 || Lyear % 400 === 0) )? `is a leap year.` :`is not a leap year`
console.log(Lyear, isLeapYear)
//  palindrome
let string = "level";
let isPalindrome = (string === string.split("").reverse().join(""))? `is a palindrome`: `not a palindrome`;
console.log(string,isPalindrome)