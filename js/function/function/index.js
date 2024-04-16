// function
function myData(){
  console.log("Welcome buddy")
}
myData()
// with arguments & parameter

function add(a,b){
  let res=a+b;
  console.log(res,"arguments & parameters")
}
add(2,4)
add(3,4)
add(29,4)
// function type
// 1. ananymous fn - without fn name
 var myValue = function(){
  console.log("welcome to Digital World")
 }
myValue()
// 2.return with multiple results
function mulFun(k,l){
 var addition=k+l;
 var sub=k-l;
 var mul=k*l;
 return{
  add:addition,
  subtraction:sub,
  multi:mul

 }
}
var result=mulFun(4,5)
console.log(result,"return")
// 3.function expression - without fn name
var data=function(a,d){
  var w=a+d
  console.log(w,"exp")
}
data(2,3)
