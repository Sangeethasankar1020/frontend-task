//1.left triangle
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
console.log(string ,"left");
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
// 4.right triangle
let nu = 5;
let stri = "";
for (let i = 1; i <= nu; i++) {
  for (let j = 0; j < i; j++) {
    stri += "*";
  }
  stri += "\n";
}
console.log(stri,"right angled triangle");
// 5. downward triangle star pattern
let m = 5;
let st = "";
for (let i = 0; i < m; i++) {
  // printing star
  for (let k = 0; k < m - i; k++) {
    st += "*";
  }
  st += "\n";
}
console.log(st,"downward triangle");
// 6. pyramid star pattern
let r = 5;
let s = "";
for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= r - i; j++) {
    s += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
     s+= "*";
  }
  s += "\n";
}
console.log(s,"pyramid");