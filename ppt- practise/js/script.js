const words = ["Hello", " ", "world", "!"];
const sentence = words.reduce((accumulator, currentValue) => accumulator + currentValue, "");
console.log(sentence); 

// reduce
let student=["john","peter"]
let data=student.reduce((accumulator,currentValue) => accumulator+currentValue)
console.log(data)

// rest
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");


// for of
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
  console.log(fruit);
}

// math
let squareRoot = Math.sqrt(16); // 4
let power = Math.pow(2, 3); // 8

// Date
const date = new Date();
console.log(date,"date")

// // Date components
// let year = currentDate.getFullYear();
// let month = currentDate.getMonth(); 
// let day = currentDate.getDate();
// let hour = currentDate.getHours();
// let minute = currentDate.getMinutes();
// let second = currentDate.getSeconds();
// let millisecond = currentDate.getMilliseconds();



// exceptional handling
const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);
     console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
finally {
     console.log('Finally will execute every time');
}


// dom

var button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Hello, World!");
});

// bom
function placeOrder() {
  var order = document.getElementById('orderInput').value;
  // 
  alert('Your order has been placed: ' + order);
}

window.onbeforeunload = function() {
  return 'Are you sure you want to leave? Your order might not be saved.';
};



















// no change

try {
  vendingMachine.getSnack('chips');
} catch (error) {
  console.log("Sorry, this snack is unavailable.");

  returnChange();
}

// out of stock
try {
  // Attempt to get snack
  vendingMachine.getSnack('chocolate');
} catch (error) {
  if (error instanceof OutOfStockError) {
      // Handle out of stock error
      console.log("Sorry, this snack is out of stock.");
  } else {
      // Handle other errors
      console.log("Something went wrong. Please try again later.");
  }
}
// invalid selection
function selectSnack(snack) {
  if (!validSnacks.includes(snack)) {
      throw new InvalidSelectionError("Invalid snack selection.");
  }
  // Process snack selection
}

try {
  selectSnack('gummy bears');
} catch (error) {
  console.log(error.message);
  // Allow the user to select again
}


