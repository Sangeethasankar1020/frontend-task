// callback
function addition(a,b,subsc,multi,divi) {
    let c = a + b
    console.log(c,"addition")
    subsc(c, 2, multi, divi)   
}
function subs(addres, d, multi, divi) {
    let e = addres - d
    console.log(e, "subtraction")
    multi(e, 2, divi)
}
function mul(subres,f,divi) {
    let g = subres * f
    console.log(g,"multiplication")
    divi(g,2)
}
function div(mulres,h) {
    let i = mulres/h
    console.log(i,"division ")
}
addition(3, 4, subs, mul, div)
