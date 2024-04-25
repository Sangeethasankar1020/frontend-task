const words = ["Hello", " ", "world", "!"];
const sentence = words.reduce((accumulator, currentValue) => accumulator + currentValue, "");
console.log(sentence); 

// add reduce
let student=["ghjlk","jksiu"]
let data=student.reduce((accumulator,currentValue) => accumulator+currentValue)
console.log(data)

// rest
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");