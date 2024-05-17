// bom - broswer object model
// if store in variable it delay the process

console.log(window.screen.width, "width")
console.log(window.location)
console.log(window.location.href)
console.log(window.location.protocol)
console.log(window.location.pathname)

// console.log(window.location.assign("https://www.w3schools.com/js/js_window.asp"))


// go back

function goback() {
    history.back()
}
// popup alert

function conform() {
    let txt;
    if (confirm("press button")) {
        txt="pressed ok"
    }
    else {
        txt="pressed cancel"
    }
    document.getElementById('error').innerHTML=txt
}