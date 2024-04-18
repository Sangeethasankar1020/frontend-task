// arrow

() => {};

var arrowFnc = (name, phn) => {
  console.log(name, phn);
  console.log(phn)
}

arrowFnc("vidhya", 95876485694);
// 
function myFunctionName(name) {
  console.log(name);
}
myFunctionName("vidhya");
// IIFE
(function () {
  console.log("dsjhfdjsfg");
})();

var data = (function (a, f) {
  let c = a + f;
  return c;
})(132, 345);
console.log(data, "data");

var result = mulFun(4, 5);
console.log(result, "return");