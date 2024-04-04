//1.right triangle
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
//2.square star pattern
let num = 5;
let str = "";
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    str = str + "*";
  }
  str = str + "\n";
}
console.log(str, "square");
// 3.hollow pattern
let row = 5;
let star = "";
for (let i = 0; i < row; i++) {
  for (let j = 0; j < row; j++) {
    if (i === 0 || i === row - 1) {
      star = star + "*";
    } else if (j === 0 || j === row - 1) {
      star = star + "*";
    } else {
      star = star + " ";
    }
  }
  star = star + "\n";
}
console.log(star, "hollow pattern");
