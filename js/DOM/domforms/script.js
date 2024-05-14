// form validation
function myFunction() {
    let x = document.getElementById("num").value;
    let text;
    if (isNaN(x) || x < 0 || x > 10) {
        text = "Invalid Input";
    } else if(x==""){
        text = "Enter input";
    }
    else {
        text=""
    }
    document.getElementById("error").innerHTML = text;
}
// css

document.getElementById("heading").style.color = "blue";