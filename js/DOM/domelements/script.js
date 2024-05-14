// async and await
async function myfunc() {
    let notice = new Promise(function (res, rej) {
        res("welcome to code clash");
    });
    console.log(await notice, "await")
}
myfunc();
// dom elements
// by id
let getting_id = document.getElementById('getId')
// by tagname
let getting_by_tagName = document.getElementsByTagName('p')
// by multiple taganame by index
let getting_by_for_tagName = document.getElementsByTagName('p')
let firstElement =  getting_by_for_tagName[0];
let secondElement = getting_by_for_tagName[1];

console.log(firstElement,"for multiple by tagname")
// Example: Change the text content of the first two 'p' elements


