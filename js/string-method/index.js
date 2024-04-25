//string method
let country = " India";
console.log(country.length, "length");

// uppercase
let course = "mern satck";
console.log(course.toUpperCase(), "uppercase");

// lower case
let welcome = "hello WORLD";
console.log(welcome.toLowerCase(), "lowercase");

// indexof & lastindexof
let data = "savitha aaa";
console.log(data.indexOf("a"), "indexof");
console.log(data.lastIndexOf("a"), "lastindexof");

// concat
let fisrtName = "Sri";
let lastName = "vidhya";
let fullName = fisrtName.concat(" " + lastName);
console.log(fullName, "concat");

// trim
let fruits = "       apple  orange  banana          ";
console.log(fruits.trim(), "trim");
console.log(fruits.trimStart(), "start trim");
console.log(fruits.trimEnd(), "end trim");

// slice ,substring,substr
let fruit = "apple orange banana";
console.log(fruit.slice(6, 13), "slice");
console.log(fruit.substring(13, 19), "substring");
console.log(fruit.substr(0, 5), "substr");

// repeat
let academy = "ocean acadamey ";
console.log(academy.repeat(15), "repeat");
console.log(academy.replace("ocean" ,"OMKAR"),"replace")
