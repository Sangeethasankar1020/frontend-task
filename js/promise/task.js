// even or odd
let number = 6
let promiseNumber = new Promise((res,rej) => {
    if (number % 2 == 0) {
        res("even number")
    }
    else {
        rej("odd number")
    }
})
promiseNumber.then((resOp) => {
    console.log(resOp,"resolve")
})
promiseNumber.catch((rejOp)=>{
    console.log(rejOp,"reject")
})
console.log(promiseNumber, "result")

// positive or negative
let num = 3
let CheckPoN = new Promise((res, rej) => {
    if (num < 0) {
        res("Negative Number")
    }
    else if (num > 0) {
        res("positive number")        
    }
    else {
        rej("zero")
    }
})
CheckPoN.then((resOP) => {
    console.log(resOP,"resolve")
})
CheckPoN.catch((rejOp) => {
    console.log(rejOp,"rej")
})
console.log(CheckPoN,"result")