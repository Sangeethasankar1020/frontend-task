// math

let num = 11.1;
console.log(Math.round(num),"round"); // it round after .5 value
console.log(Math.ceil(num),"ceil") //it take after .1 round it 
console.log(Math.floor(num),"floor") // it does not consider point value
console.log(Math.trunc(num),"trunc") //it does not consider point value
let num02=-12.5;
console.log (Math.abs(num02),"absolute") // change into popsitive value
console.log(Math.min(2,67,4,33,1,9),"minimum")
console.log(Math.max(34,78,1100,220),"maximum")

// date

let today=new Date()
console.log(today,"date")
console.log(today.getDay(),"get a day") // it take index value like monady as 0
console.log(today.getFullYear(),"get a full year")
console.log(today.getDate(),"get a date")
console.log(today.getHours(),"get hours")
console.log(today.getMinutes(),"get minutes")

// set

let Day= new Date("2001-04-03")
let changedDay=Day.setDate(11)
console.log(Day,"set day")

// milliseconds

let milData= Date.now()
console.log(milData,"milliseconds since 1970 - unique value")

// min using math min with loop

const numbers = [0,2,3,4,-3];
function findMinimum(numbers) {
  let min = numbers[0]; 
  for (let i = 1; i < numbers.length; i++) {
      min = Math.min(numbers[i]);
  }
  return min; //returns callback value
}
console.log(findMinimum(numbers),"Minimum"); 
