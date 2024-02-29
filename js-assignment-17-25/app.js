// var arr = [[1,21],["usman"],[24 ,44,44]]

// var matrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// for (var i = 1 ; i<=10 ; i++){
//     console.log(i);
// }

// var table = +prompt("Enter table to print")
// var length = +prompt("Enter table length to print")
// for (var i = 1 ; i<length ; i++){
//     console.log(table + " x " + i + " = " + table * i);
// }

// var fruits = ["apple", "mango ", "banana", "orange", "strawberry"];
// for (var i = 0 ; i<fruits.length ; + i++){
//     console.log(fruits[i]);
//     console.log("Element at index " + i + " is " + fruits[i]);
// }

// var sweet = prompt(
//   "Welcome to ABC bakery. What do you want to order sir/ma'am??"
// );
// var arr = ["cake", "apple pie", "chips", "patties"];
// for (var i = 0; i < arr.length; i++) {
//   if (sweet.toLowerCase() == arr[i]) {
//     console.log(sweet + " is available a " + i + " index");
//   } else {
//     console.log("Not available");
//   }
// }

// var num = [3, 6, 2, 56, 32, 5, 89, 32];
// var largest = 0;
// for (var i = 0 ; i<num.length ; i++){
//     if(num[i]> largest){
//         largest = num[i]
//     }
// }
// document.write("Largest number is " + largest);
// for (var i = 5; i <= 100; i++) {
//   if (i % 5 == 0) {
//     console.log(i);
//   }
// }

//chap 21 - 25
// var firstName = prompt("Enter your First Name ")
// var lastName = prompt("Enter your last Name ")
// console.log("Hello " + firstName + lastName);

// var input= prompt("Enter your fav mobile model")
// console.log("your fav phone is " + input);
// console.log("Length of string " + input.length);

// var country = "Pakistan"
// var result = country.indexOf("n")
// console.log(country.indexOf("n"));
// console.log(result);

// var msg  = "Hello world"
// var result = msg.lastIndexOf("l")
// console.log(msg.lastIndexOf("l"));
// console.log(result);

// var country = "Pakistan"
// var character = country.charAt(3);
// console.log("Character at index 3 is: "+character);

// var firstName = prompt("Enter your First Name ")
// var lastName = prompt("Enter your last Name ")
// console.log(firstName.concat(lastName));

// var city = "Hyderabad"
// console.log(city.replace("Hyder" , "Islam"));

// var msg =
//   "Ali and Sami are best friends. They play cricket and football together";
//   console.log(msg.replace(/and/g , "&"));

// Even Numbers
// for(i=2; i<=20 ; i+=2){
//   console.log(i);
// }

// odd Numbers
// for(i=1; i<=19 ; i+=2){
//   console.log(i);
// } 

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// var strToNum = "472"
// var  result = strToNum.toString();
// console.log(++strToNum , result);

// var input = prompt("Enter any word")
// console.log(input.toUpperCase());

// var university = "University of Karachi";
// console.log(university.split(""));

// var input = prompt("enter word ")
// var result = input.lastIndexOf(input)
// console.log(result);

var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
var length = 5;
var pass = "";
for (var i = 0; i < length; i++) {
  var randNum = Math.floor(Math.random() * characters.length);
  pass += characters[randNum] + Math.floor(Math.random() * 9);
  console.log(characters[randNum]);
  console.log(randNum);
}
console.log("10 words random pass ===>" , pass);

