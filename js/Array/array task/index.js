// ternary
//1. even or odd
let n = 3;
let res=(n%2==0)? `even`:`odd`
console.log(n,res,"e/o")
// 2.positive or negative
let m=-8
let number=(m>=1)? `positive`:`negative`
console.log(m,number,"p/n")
// 3.both div by 3 & 5
let num=15
let result=(num%3==0 && num%5==0)?`divisible by 3 & 5`:`not divisible by 3 & 5`
console.log(num,result," by 3/5")
// 4. max of two numbers
let n1=3
let n2=6
let maxNum=(n1>n2)? `n1 is the maximum number`:`n2 is the maximum number`
console.log(maxNum,"max num")
// 5.leap year or not
let year=2024
let Leapyear=(year%400==0 || year%4==0)? `leap year`:`not a leap year`
console.log(year,Leapyear,"ly")
// 6.string is empty or not
let str="sang"
let Emptystr=(str=="")?`empty string`:`not a empty string`
console.log(str,Emptystr,"Empty str")
// 7vowels or consonant
let letter="b"
let VowelLetter=(letter=="a"||letter=="e"||letter=="i"||letter=="o"||letter=="u")?`vowel`:`consonant`
console.log(letter,VowelLetter,"v/c")
// 8num is within a range
let k=25
let numRange=(k<=30||k>=10)?` with a range`:`not within a range`
console.log(k,numRange,"numRange")
//9.prime or not
let j=3
let PrimeNum=(j==1)? (j==2||j==3)?(j%2==0&&j%3==0)?`not a prime number`:`prime number`:` neither prime  nor composite number`:`not a prime number`
console.log(j,PrimeNum,"prime or not")
// 10. string is palindrome or not
