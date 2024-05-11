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

