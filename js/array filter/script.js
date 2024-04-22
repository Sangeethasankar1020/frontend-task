// array filter
var studentData=[{name:"Sangeetha",age:23},{name:"gayu",age:26},{name:"hemanth",age:22}]
let data=studentData.filter((StuData)=>StuData.age ==22)
console.log(data,"data")

// spread operator
let list1=["mango","bannana","grapes"]
let list2=["onion","egg","briyani"]
let TotalList=[...list1,...list2]
console.log(TotalList,"spread operator")

// map function
var number=[1,2,3,4,5,9]
var mappedValue=number.map((num)=>{
  return num*10
})
console.log(mappedValue,"map function")

// equal its affects original array

let n1=[1,2,3,5]
let n2=n1
n1.push(8,0)
console.log(n1,"equal")