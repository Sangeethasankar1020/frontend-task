// print num 1-15
let n = 15;
for (let i = 1; i <= 15; i++) {
  console.log(i, "From 1-15");
}
// odd num from 6-29
for (let j = 6; j <= 29; j++){
  if (j % 2 !== 0) {
    console.log(j, "odd");
  }
}
// even 20-40
for (let k = 20; k <= 40; k++) {
  if (k % 2 == 0) {
    console.log(k, "even");
  }
}
//  divisible by 3
for (let i = 1; i <= 45; i++) {
  if (i % 3 == 0) {
    console.log(i, "by 3");
  }
}
// by 5
for (let i = 1; i <= 45; i++) {
  if (i % 5 == 0) {
    console.log(i, "by 5");
  }
}
// by 3 and 5
for (let i = 1; i <= 45; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "by 3 & 5");
  }
}
// sum from 1-100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
  console.log(sum, "sum");
}
// factorial
let fac = 1;
for (let i = 1; i <= 5; i++) {
  fac = fac * i;
}
console.log(fac, "factorial");
// fibonaccce
let n1 = 0;
let n2 = 1;
for (let i = 1; i <= 10; i++) {
  console.log(n1, "fibo");
  n3 = n1 + n2;
  n1 = n2;
  n2 = n3;
}
