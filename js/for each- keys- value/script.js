// for each
let employeData=[
  {
    name:"vidhya",
    idNo:563,
    bloodGroup:"o+"
  },
  {
    name:"Sangeetha",
    idNo:564,
    bloodGroup:"o-"
  },
  {
    name:"priya",
    idNo:565,
    bloodGroup:"o+"
  }
]

employeData.forEach((data) => {
  console.log(data,"for each")
});

// keys
let data={
  name:"vidhya",
  idNo:563,
  bloodGroup:"o+"
}
let keyData=Object.keys(data)
console.log(keyData,"keys")

// values
let valueData=Object.values(data)
console.log(valueData,"values")

// Entries
let Entry=Object.entries(data)
console.log(Entry,"entries")

// task

let numbers = [1, 2, 3, 4, 5];
let newArray = [];

numbers.forEach(num => {
  let newValue = num * 10;
  newArray.push(newValue);
});
console.log(numbers,"Original array" );
console.log(newArray,"New array");