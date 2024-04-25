// scopes
let name="sangeetha"  //global scope
function myName(){
  let name="vidhya";  //local scope
  console.log(name,"local scope")
}
myName()
console.log(name,"global scope")