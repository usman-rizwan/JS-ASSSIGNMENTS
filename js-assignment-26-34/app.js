// Assignment Js Chapter 26-34

// var userInput = prompt("Enter positive integer" , "3.452")
// console.log("Round value ===>",Math.round(userInput));
// console.log("Floor value ===>",Math.floor(userInput));
// console.log("Ceil value ===>",Math.ceil(userInput));

// var userInput = prompt("Enter a negative floating point number" , "-2.673")
// console.log("Round value ===>",Math.round(userInput));
// console.log("Floor value ===>",Math.floor(userInput));
// console.log("Ceil value ===>",Math.ceil(userInput));

// var absoluteVal = -5;
// console.log("Absolute Value",Math.abs(absoluteVal));

// var diceVal = Math.floor(Math.random() * 7) ;
// console.log("Random dice value is " + diceVal);

// var coinToss = Math.ceil(Math.random() * 2);
// console.log(coinToss);
// if (coinToss === 1) {
//   console.log("Random coin value : Tails");
// } else {
//   console.log("Random coin value : Heads");
// }

// var randNum = Math.ceil(Math.random() * 99);
// console.log("Random value between 1 and 100 is " + randNum);\

// var userInput = prompt("Please enter your weight in kgs");
// console.log("The weight of user is " + userInput);

// var secretNum = Math.ceil(Math.random() * 10);
// console.log(secretNum);
// var userInput = +prompt("Enter a number between 1 and 10");
// if (userInput === secretNum) {
//   console.log("Congratulations!! , You guess correct number");
// } else {
//   console.log(" Please try again");
// }

// Date Methods

// var date = new Date();
// console.log(date);

var date = new Date();
var months = ["January", "Feburary", "March","April","May","June","July","August","September","October","November", "December"]
console.log("Current month: "+months[date.getMonth()]);

// var date = new Date();
// var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
// console.log("Today is: " + days[date.getDay()]);

// var date = new Date();
// var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
// console.log(date.getDay());
// if( date.getDay() == 0 || date.getDay() == 6){
//     console.log("It's Fun Day");
// }else{
//     console.log("It's Work Day");
// }

// var date = new Date().getDate()
// console.log(date);
// if (date <= 15) {
//     console.log("First fifteen days of month");
// }else{
//     console.log("Last fifteen days of month");
// }

// var date = new Date();
// console.log(date);
// console.log("Elapsed milliSeconds since January 1,1970: " + date.getTime());
// console.log("Elapsed minutes since January 1,1970: " + date.getTime() / (1000 * 60));


// var date = new Date();
// console.log(date.getHours());
// if (date.getHours() > 12) {
//     console.log("It's Pm");
// } else {
//     console.log("It's Am");
// }


// var lastDay = new Date("31 December 2023");
// console.log("Later Date: "+lastDay);


// var ramadanDate = new Date("Mar 22, 2023")
// var today = new Date()
// var daysDiff = today - ramadanDate;
// var result = Math.floor(daysDiff / (1000 * 60 * 60 * 24))
// console.log(result + " days have passed since 1st Ramadan, 2023");

// var date = new Date("5 Dec 2015");
// var today = new Date()
// var diff = today - date
// console.log("On reference date " + date + " ," + Math.floor(diff / (1000 * 60)) + " seconds had been passed since beginning of " + date.getFullYear());


// var date = new Date();
// console.log(date);
// var hours = date.getHours()
// date.setHours(hours - 1)
// console.log("1 hour ago, it was " + date);


// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// console.log("Date 100 years ago: " + currentDate);

// var userInput = prompt("Enter your DOB(dd/mm/yy)", "16/jan/2006");
// var userDob = new Date(userInput)
// // console.log(userDob);
// var today = new Date();
// var diff = today - userDob
// var ageInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
// var months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)); // Approximating a month as 30 days
// // console.log(Math.floor((diff % (1000 * 60 * 60 * 24 * 365)/ (1000 * 60 * 60 * 24 * 30))));
// console.log("Your current age is " + ageInYears + " years and " + months + " months");

// var userInput = prompt("Enter your DOB(dd/mm/yy)", "16/jan/2006");
// var userDob = new Date(userInput)
// // console.log(userDob);
// var today = new Date();
// var diff = today - userDob;
// var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
// console.log("Your age is "+age + " years " );
// console.log("Your birth year is " + userDob.getFullYear());
