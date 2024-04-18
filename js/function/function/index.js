// function
function myData() {
  console.log("Welcome buddy");
}
myData();
// with arguments & parameter

function add(a, b) {
  let res = a + b;
  console.log(res, "arguments & parameters");
}
add(2, 4);
add(3, 4);
add(29, 4);
// function type
// 1. ananymous fn - without fn name
var myValue = function () {
  console.log("welcome to Digital World");
};
myValue();
// 2.return with multiple results
function mulFun(k, l) {
  var addition = k + l;
  var sub = k - l;
  var mul = k * l;
  return {
    add: addition,
    subtraction: sub,
    multi: mul,
  };
}
// 3.function expression - without fn name
var data = function (a, d) {
  var w = a + d;
  console.log(w, "exp");
};
data(2, 3);

// JavaScript immediately invoked function expressions (IIFEs)
 ( function(){
  console.log("Hi everyone !")
 })();

// 
( function(name){
  console.log(name,"IIFE")
})("Sharmii ")

// arrow function
// one
const square = y => y* y;
console.log(square(5));  
// two
var arrowFun=(name,age)=>{
  console.log(name,age)
}
arrowFun("santhosh",23)

// this inside object method
const person = {
  name:"Sangeetha",
  age:23,
  mobileNumber:68799990,
  welcome(){
    console.log(this)
    console.log(this.name)
    console.log(this.age)
  }
}
person.welcome();