// simple calc using switch case

let operator = prompt("Enter Operator");
let n1 = parseInt(prompt("Enter the value of n1"));
let n2 = parseInt(prompt("Enter the value of n2"));
var result;

switch (operator) {
  case "+":
    result = n1 + n2;
    console.log(result);
    break;
  case "-":
    result = n1 - n2;
    console.log(result);
    break;
  case "*":
    result = n1 * n2;
    console.log(result);
    break;
  case "/":
    result = n1 / n2;
    console.log(result);
    break;
  default:
    console.log("something wrong");
}
