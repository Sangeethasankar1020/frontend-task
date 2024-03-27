// 1.weekdays/weekend
// let dayofWeek = prompt("Enter day")
// switch (dayofWeek) {
//     case "monday":
//     case "tuesday":
//     case "wednesday":
//     case "thursday":
//     case "friday":
//      console.log("Entered day is Weekday")
//      break;
//     case "saturday":
//     case "sunday":
//      console.log("Entered day is Weekend");
//      break;
//     default:
//      console.log("Invalid day");
// }

// 2.Month
// let numofmonth = parseInt(prompt("Enter the month number"))
// switch (numofmonth) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("Septembur");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//         break;
//     default:
//     console.log("Entered wrong month num")
// }

// 3.weekbynum
// let numofweek = parseInt(prompt("Enter the Week day number"))
// switch (numofweek) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("thursady");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Entered wrong Week num")
// }

// 4.vowel/consonant
// var alphabet = prompt("Enter a Alphabet");
// switch (alphabet) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("Entered Alphabet is vowel")
//     break;
//     default:
//     console.log("Entered alphabet is consonant")
// }

// 5.grade by gpa
// let gpa = parseFloat(prompt("Enter your GPA"))
// switch (gpa) {
//   case 10:
//     console.log("O grade");
//     break;
//   case 9:
//     console.log("A+ grade");
//     break;
//   case 8:
//     console.log("B+ grade");
//     break;
//   case 7:
//     console.log("c grade");
//     break;
// }

// 6.number of days in a month
// let monthName = prompt("Enter a month Name")
// switch (monthName) {
//   case "January":
//   case "march":
//   case "may":
//   case "july":
//   case "august":
//   case "october":
//   case "december":
//     console.log("31 Days in this month");
//     break;
//   case "april":
//   case "june":
//   case "september":
//   case "november":
//     console.log("30 Days in this month");
//     break;
//   case "february":
//     console.log("28 Days in this month");
//     break;
// default:
//     console.log("Invalid month");
// }

// 7.leap year or not

// let leapYear = prompt("Enter a Year")
// switch(leapYear % 400 && (leapYear % 4 )) {
//   case 0:
//     console.log("Entered year is leap year");
//     break;
// default:
//     console.log(" Is not a Leap Year")
// }

// 8.season based on month

// let Monthname = prompt("Enter a month Name")
// switch (Monthname) {
//     case "january":
//     case "february":
//     case "december":
//         console.log("Entered Month is Winter");
//         break;
//     case "march":
//     case "april":
//     case "may":
//         console.log("Entered Month is Spring");
//         break;
//     case "june":
//     case "july":
//     case "august":
//         console.log("Entered Month is Summer");
//         break;
//     case "september":
//     case "october":
//     case "november":
//         console.log("Entered Month is Autumn");
//         break;
//     default:
//         console.log("Invalid month");
// }

// 9.century year or not
// let centYear = parseInt(prompt("Enter a Year"))
// switch (centYear % 100 ) {
//     case 0:
//         console.log("Entered year is Century Year")
//         break;
//     default:
//         console.log("NOT a Centuary Year")
// }
// 10.convert celcuis to fahernheit
// let celcuis = parseFloat(prompt("Enter the Tempearture in Celcius"))
// let fahernheit = ((celcuis * 1.8) + 32);
// console.log(`${celcuis} degree celcious is equal to ${fahernheit}`);