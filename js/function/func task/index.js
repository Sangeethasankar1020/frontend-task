// func task
// 1.print hello world
function message(){
  console.log("Hello World")
}
message()
// 2.returns the square of a number
function retSquare(n){
 return n*n;
}
let res=retSquare(3)
console.log(res,"square")
// 3.convert Celsius to Fahrenheit
function celFaheren(cel){
 formula=( cel*9/5)+32
}
celFaheren(20)
console.log(formula,"cel to faheren")
// 4. area of rectangle
function areaofRec(a,b){
  area=a*b
}
areaofRec(3,4)
console.log(area,"area of rectangle")
// 5. area & perimeterof circle
function circle(r){
  let pi=22/7
 AofCircle=(pi*r*r)
 PeriofCircle=(2*pi*r)
}
circle(2)
circle(3)
console.log(AofCircle,PeriofCircle,"Area & perimeter of circle")
// 6. reverse a number
function reverseNum(num) {
  var reverse = 0;
  while(num != 0)
  {
    reverse = reverse * 10;
    reverse = reverse + num%10;
    num = Math.trunc(num/10);
  }
  return reverse;
}
console.log(reverseNum(1273))
// 7.count the number of vowels in a string
function Couvowel(name){
  let count=0;
  for (let i=0;i<name.length;i++){
    if(name[i]=="a"||name[i]=="e"||name[i]=="i"||name[i]=="o"||name[i]=="u"){
      count++;
    }
  }
  return count;
}
console.log(Couvowel("gayathri"),"count the no of vowels")
// 8. Flatten array of arrays using JavaScript reduce
// 9. check if an input string is a palindrome
function CheckPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(CheckPalindrome("racecar"), " check the string is palindrome or not");
console.log(CheckPalindrome("sang"), " check the string is palindrome or not");
// 10. calculate simple interest based on the principle amount
function Simpleint(principle,rate,time){
 let Amount=principle+(principle*rate*time)
return Amount
}
console.log(Simpleint(2000,2,2))
// 11. generate random num b/w two num

function genRandom(start, end) {
  return Math.floor(Math.random() * end) + start
}

console.log(genRandom(1,25)) 
// 12.find the factorial of num 
function Factorial(m){
  if(m==1){
    console.log(m,"factorial of number")
  }
  else if(m>1){
    let fac=1
    for (let i=m;i>0;i--){
      fac=fac*i
    }
    console.log(fac, "factorial of number");
  }
}
Factorial(5)
// 13.find the count of letter in a string
 function countletter(str,l){
  let count=0
  for(let i=0;i<str.length;i++){
    if(str[i]==l){
      count++
    }
  }
  return count
 }
 console.log(countletter("Sangeetha","a"),"Count the letter of a string")