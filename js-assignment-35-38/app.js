// Js chap 35-38

// function foo() {
//     var date = new Date()
//     return date
// }
// console.log(foo());


// function greet(name1,name2){
//  return name1 + name2
// }
// console.log(greet("Usman " , " Rizwan"));


// function add(a, b) {
//     return a + b
// }
// var userInput1 = +prompt("Enter any random num", "1")
// var userInput2 = +prompt("Enter any random num", "2")

// console.log(add(userInput1, userInput2))



// var result;
// function myOperator(num1, num2, operator) {
//     if (operator === "+") {
//         result = num1 + num2
//     } else if (operator === "-") {
//         result = num1 - num2
//     } else if (operator === "*") {
//         result = num1 * num2
//     } else if (operator === "/") {
//         result = num1 / num2
//     } else {
//         result = "Invalid operator"
//     }
//     return result
// }
// var myResult = myOperator(2, 4, "+")
// console.log(myResult);
// var myResult = myOperator(8, 4, "-")
// console.log(myResult);
// var myResult = myOperator(2, 4, "*")
// console.log(myResult);
// var myResult = myOperator(12, 4, "/")
// console.log(myResult);


// function mySqaure(a){
// return a * a
// }
// var num = +prompt("Enter number to square " , "8")
// var result = mySqaure(num)
// console.log(result);

// var result = 1;
// function myFactorial(num) {
//     for (var i = num; i >= 1; i--) {
//         result = i * result
//         console.log(i);
//     }
//     return result;
// }
// console.log(myFactorial(3));

// function myCount(countStart, countEnd) {
//     for (var i = countStart; i < countEnd; i++) {
//         console.log(i);
//     }
//     return i;
// }
// var userInput1 = +prompt("Enter any number to start counting ", "3")
// var userInput2 = +prompt("Enter any number to start counting ", "10")
// console.log(myCount(userInput1, userInput2));


// function areaOfRectangle(length, width) {
//  return length * width
// }
// console.log("Area ===> "  + areaOfRectangle(4,6));


// function palindrome(a) {
//     var reverseWord = a.split("").reverse().join("")
//     // console.log( a.split("").reverse().join(""));
//     if (a == reverseWord) {
//         console.log(reverseWord);
//         console.log(userInput + " is a palindrome word");
//     } else {
//         console.log(reverseWord);
//         console.log(userInput + " is not a palindrome word");
//     }
// }
// var userInput = prompt("Enter any word", "madam")
// palindrome(userInput)


// var longestWord = ""
// function findLongest(str) {
//    var words = str.split(" ")
//    // console.log(words);
//    for (var i = 0; i < words.length; i++) {
//       // console.log(words[i]); 

//       if (words[i].length > longestWord.length) {
//          // console.log(words[i]);
//          longestWord = words[i]
//       }
//    }
//    return longestWord; 
// }
// var userInput = prompt("Enter any sentence", "Web development 2023");
// var result = findLongest(userInput)
// console.log(result + " is the longest word");


// The Geometrizer

// function calcCircumference(radius) {
//    return 2 * 3.142 * radius
// }

// var userInput = +prompt("Enter radius", "2")
// console.log("The Circumference of circle is found to be  " + Math.round(calcCircumference(userInput)));

// function calcArea(radius) {
//    return 3.142 * (radius * radius)
// }
// var userInput = +prompt("Enter radius to find area of circle", "2")
// console.log("The Area of circle is found to be  " + calcArea(userInput));

// var arr = ["usman", "anas", "usman"]
// // var found = true
// for (let i = 0; i < arr.length; i++) {
//     //    console.log(arr[i]);
//     for (var j = 1; j < arr.length; j++) {
//         // console.log(arr[j]);
//         if (arr[i] == arr[j]) {
//             console.log(arr.pop());
//             console.log(arr);

//         } else {
//             console.log("else" + arr.push(arr[i]));
//         }
//     }
// }
// var arr = ["usman", "anas", "usman"]
// // var found = true
// for (let i = 0; i < arr.length; i++) {
//     //    console.log(arr[i]);
//     for (var j = 1; j < arr.length; j++) {
//         // console.log(arr[j]);
//         if(arr[i]===arr[j]){
//           arr.pop(j) 
//             console.log(arr[i]+arr[j],arr[i]===arr[j] );
//             // console.log();
//         }
//         // console.log(arr[i]);
//         // console.log( "j "+arr[j]);
//         // console.log(arr[i]===arr[j]);
//     }
// }   


var arr = ["usman", "usman", "usman", "anas", "usman", "ali", "usman", "sufi", "saleem", "usman"]
console.log(arr.length);
for (var i = 0; i < arr.length; i++) {
    // debugger
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {

            // arr.splice(1)
            // arr.splice(j)
            arr.splice(j, 1)
            j--
        }

    }
}
console.log("Unique array ===> ", arr);


// function occurrencesCount(word , letter) {
// return word + letter
// var count = 0 ;
// var words = word.split("")
// for(var i = 0 ; i<words.length ; i++){
//     // debugger
//     if(words[i]== letter){
//         count ++
//     }
// }
// return count
// }
// var wordToSearch = "muhammad usman rizwan";
// var searchLetter = "a";
// // var userInput = prompt("usman")
// console.log(occurrencesCount(wordToSearch , searchLetter) );

function toCapitalizeFirst(str) {
    var words = str.split(" ")
    //  return words
    for (var i = 0; i < words.length; i++) {
        // console.log(words[i]);
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    return words.join(" ")
}
console.log("Capitalize words === >" + toCapitalizeFirst("my name is usman"));

// AnaGram Words 
function anagramWords(val1, val2) {
    var word1 = val1.split("").sort().join("")
    var word2 = val2.split("").sort().join("")
    if (word1 == word2) {
        console.log("Yes " + val1 + " and " + val2 + " are anagram words");
    } else {
        console.log("No " + val1 + " and " + val2 + " are not anagram words");
    }
    // return word1 , word2

}
var userInput1 = prompt("Enter any word ", "care") //
var userInput2 = prompt("Enter any word ", "race")
anagramWords(userInput1, userInput2);