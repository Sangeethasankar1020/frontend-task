// ternary
//1. even or odd
let n = 3;
let res=(n%2==0)? `even`:`odd`
console.log(n, res, "e/o")

// 2.positive or negative
let m=-8
let number=(m>=1)? `positive`:`negative`
console.log(m, number, "p/n")

// 3.both div by 3 & 5
let num=15
let result=(num%3==0 && num%5==0)?`divisible by 3 & 5`:`not divisible by 3 & 5`
console.log(num, result, " by 3/5")

// 4. max of two numbers
let n1=3
let n2=6
let maxNum=(n1>n2)? `n1 is the maximum number`:`n2 is the maximum number`
console.log(maxNum, "max num")

// 5.leap year or not
let year=2024
let Leapyear=(year%400==0 || year%4==0)? `leap year`:`not a leap year`
console.log(year, Leapyear, "ly")

// 6.string is empty or not
let str="sang"
let Emptystr=(str=="")?`empty string`:`not a empty string`
console.log(str, Emptystr, "Empty str")

// 7vowels or consonant
let letter="b"
let VowelLetter=(letter=="a"||letter=="e"||letter=="i"||letter=="o"||letter=="u")?`vowel`:`consonant`
console.log(letter, VowelLetter, "v/c")

// 8num is within a range
let k=25
let numRange=(k<=30||k>=10)?` with a range`:`not within a range`
console.log(k, numRange, "numRange")

//9.prime or not
let j=3
let PrimeNum=(j==1)? (j==2||j==3)?(j%2==0&&j%3==0)?`not a prime number`:`prime number`:` neither prime  nor composite number`:`not a prime number`
console.log(j, PrimeNum, "prime or not")

//10. positive or zero
let l = 0
let PositiveZero = (l == 0) ? `zero` : (l >= 1) ? `positive` : `negative`;
console.log(l, PositiveZero, "Positive/Zero")

// 11.within range/not
let a = 8;
let minRange = 1;
let maxRange = 20;

let withinRange =(a >= minRange && a <= maxRange )? "Within range" : "Outside range";
console.log(a, withinRange, "within range/not");
//12. min of three number
let x = 10;
let y = 5;
let z = 8;

let min = (x < y )? (x < z ? x : z) : (y < z) ? y : z;
console.log("Minimum of", x, ",", y, ", and", z, "is:", min);
//13.Check if a number is even or odd without using modulo operator (%) 
let r = 4;
let results = (r & 1) === 0 ? "even" : "odd";
console.log(r, "is", results);
// 14.leap
const Lyear = 2024;
const isLeapYear = (Lyear % 4 === 0 && (Lyear % 100 !== 0 || Lyear % 400 === 0) )? `is a leap year.` :`is not a leap year`
console.log(Lyear, isLeapYear)
//  15. palindrome
let string = "level";
let isPalindrome = (string === string.split("").reverse().join(""))? `is a palindrome`: `not a palindrome`;
console.log(string,isPalindrome)
