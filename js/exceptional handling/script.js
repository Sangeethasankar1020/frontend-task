// exceptional handling 
// even or odd
let num=0 
function myfunction() {
    try {
        if (num % 2 == 0) {
            console.log(num, "number is even")
        }
        else if (num%2 !=0){
            console.log(num, "number is odd")
        }
    }
    catch(e) {
        console.log(e)
    }
    finally {
        
    }
}
myfunction()

// positive or negative

let number = prompt("enter a number")
function myfunc() {
    try {
        if (number > 0) {
            console.log(number,"number is positive")
        }
        else if(number<0){
            console.log(number,"number is negative")
        }
        else {
            throw (number, "zero")
        }
        
    }
    catch (e) {
        console.log(e)
    }
}
myfunc() 