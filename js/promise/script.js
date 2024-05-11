n// promise
let count =true
let promiseDemo = new Promise(function (res, rej) {
    if (count) {
        res("resolve is working")
    }
    else {
        rej("reject is working")
    }
})
promiseDemo.then((resOp)=> {
    console.log(resOp,"resolve message")
})
promiseDemo.catch((rejOp) => {
    console.log(rejOp, "reject message")
})
console.log(promiseDemo, "promise") //micro macro //1st micro execute 
// set time out
setTimeout(() => {
    let a = 2
    let b = 4
    c = a + b
    console.log(c,"set time out")
}, 2000)

// set interval
setInterval(() => {
    let a = 2
    let b = 4
    c = a + b
    console.log(c, "set Interval")
}, 3000);