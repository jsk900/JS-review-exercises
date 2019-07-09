// <!--
// ### Q1. javascript-functions-1

// Write a function `hello(name)` that logs:

// Hello ______!

// Where the blank is replaced by the argument **name**. For example:

// hello("John")

// will return "Hello John!"

//..........................................................................................
// const hello = name => console.log(`Hello ${name}`);
// hello("Harry");
//..........................................................................................

// ### Q2. javascript-functions-2

// Write a function `square(x)` in that takes a number as an argument and returns the square of that number.

//..................................................................................................
// const square = num => num * num;
// console.log(square(5));
//..................................................................................................

// ### Q3. age-calculator

// Write a function named `calculateAge` that takes two arguments: birth year and current year. The function should then calculate the two possible ages based on that year, and returns the result in the following format (replacing 'NN' with the possible years) : "You are either NN or NN."

// Examples:

// calculateAge(1987,2016);  // returns 'You are either 28 or 29.'

//...............................................................................
// const calculateAge = (birthYear, currrentYear) =>
//   `You are either ${currrentYear - birthYear - 1} or ${currrentYear -
//     birthYear}`;
// console.log(calculateAge(1961, 2019));
//...............................................................................

// ### Q4. javascript-functions-4

// Write a function `xToNum(num)` that takes as arguments two numbers: **x** and **num** and returns the sum of all numbers from **x** to **num** (including both). For example:

// xToNum(4, 8)  // = 4 + 5 + 6 + 7 + 8 = 30

// will return 30.
//....................................................................................
// const xToNum = (x, y) => {
//   result = 0;
//   for (let i = x; i <= y; i++) {
//     result += i;
//   }
//   return result;
// };

// console.log(xToNum(4, 8));
//....................................................................................

// ### Q5. count-the-arguments

// Write a function named `countTheArguments`. If less than five numbers are passed in as arguments when the function is called, the function should return "Sorry, not enough arguments." If more than five numbers are passed in as arguments when the function is called, the function should return "Sorry, too many arguments." If exactly five arguments are passed in when the function is called, the function should return the sum of the arguments.

// Examples:
// countTheArguments(1, 2, 3, 4);  // returns 'Sorry, not enough arguments'
// countTheArguments(44, 21, 55, 33, 3, 4);  // returns 'Sorry, too many arguments'
// countTheArguments(12, 1, 3, 5, 10);  // returns 31

//...................................................................................
// const countTheArguments = (...args) =>
//   args.length < 5
//     ? `Sorry, not enough arguments`
//     : args.length > 5
//     ? `Sorry, too many arguments`
//     : args.reduce((acc, sum) => acc + sum);

// console.log(countTheArguments(12, 1, 3, 5, 10));
//...................................................................................

// ### Q6. javascript-functions-5

// Consider the following JavaScript
// function increase(result, num, count) {
//   for (var i = 0; i < count; i++) {
//     result += num;
//   }
//   return result;
// }

// function decrease(result, num, count) {
//   for (var i = 0; i < count; i++) {
//     result -= num;
//   }
//   return result;
// }

// var result = 0;
// result = increase(result, 3, 3);
// result = decrease(result, 2, 2);

// console.log(result);

// What will be the output of `console.log(result)`? 5

// ### Q7. temperature-converter

// Write two functions, one named `celsiusToFahrenheit` and the other named `fahrenheitToCelsius.`  `celsiusToFahrenheit` should take in a celsius temperature as an argument and convert it to fahrenheit. Similarly, `fahrenheitToCelsius` should take in a fahrenheit temperature as an argument and convert it to celsius.

// Examples:
// celsiusToFahrenheit(30);  // returns 86
// fahrenheitToCelsius(32);  // returns 0

//....................................................................................
// const celsiusToFahrenheit = degrees => degrees * (9 / 5) + 32;
// const fahrenheitToCelsius = degrees => (degrees - 32) * (5 / 9);
// console.log(celsiusToFahrenheit(30));
// console.log(fahrenheitToCelsius(32));
//....................................................................................

// ### Q8. javascript-functions-8-a

// Given the following javascript code:

// function encode(digit1, digit2) {
//   var code = "";

//   function addZeroes(size) {
//     for (var i = 0; i < size; i++) {
//       code += "0";
//     }
//   }

//   function addOnes(size) {
//     for (var i = 0; i < size; i++) {
//       code += "1";
//     }
//   }

//   addZeroes(digit1);
//   addOnes(digit2);

//   return code;
// }

// var code = encode(3, 4);
// console.log(code);

// what will be the output to the console? 0001111

// ### Q9. functionception

// Write a function called `functionCeption` that returns a new function.
// When called, that new function should console logs out "Is all that we see or seem,
// But a dream within a dream?". Neither function should take any arguments.

// Checkout the [Inception](https://en.wikipedia.org/wiki/Inception) wikipedia page
// if you're curious about the inspiration for this question.
// Also shoutout to Edgar Allen Poe for the
// [quote](http://www.poetryfoundation.org/poems-and-poets/poems/detail/52829).

// Examples:
// var dreamFunc = functionCeption();
// dreamFunc(); //logs "Is all that we see or seem, But a dream within a dream?"

//.....................................................................................
// const functionCeption = () => () =>
//   console.log("Is all that we see or seem, But a dream within a dream?");

// const dreamFunc = functionCeption();
// dreamFunc();
//.....................................................................................

// ### Q10. javascript-functions-6-a

// This is a two part assignment.

// **Part 1**

// Write a javascript function `printElement(element, index)` that takes as argument an element
// of an array and an index. It then logs to the console:
// 1. The index.
// 2. The type of the element.
// 3. The element itself.

// For example, after these two lines

// var arr = ["apple", "orange", "pear"]
// printElement(arr[0], 0)

// The following will be logged to the console:

// index: 0, type: string, value: "apple"

// **Part 2**

// Write a function `printArrayElements(arr)` that takes an array as an argument.
// The function will traverse through the array, and for each element call the function `printElement`.

// For example, after these two lines:
// var arr = ["apple", "orange", "pear"]
// printArrauElements(arr)

// The following will be logged to the console:

// index: 0, type: string, value: apple
// index: 1, type: string, value: orange
// index: 2, type: string, value: pear

//.....................................................................................
// const arr = ["apple", "orange", "pear"];
// const printArrayElements = arr =>
//   arr.map((x, index) => printElements(x, index));
// const printElements = (x, index) =>
//   console.log(`index, ${index}, type: ${typeof x}, value: ${x}`);

// printArrayElements(arr);
//.....................................................................................

// ### Q11. javascript-functions-7

// You are given the following code:

// function forEach(arr, action) {
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] = action(arr[i]);
//   }
//   return arr;
// }

// function addOne(num) {
//   return num + 1;
// }

// var arr = [0, 1, 2, 3, 4];

// console.log(forEach(arr, addOne));   //here*******

// Write a single line of code that will result in each element of **arr** being increased by 1.
// After that line of code your code **arr** will look like this:

// `[1, 2, 3, 4, 5]`

// ### Q12. javascript-functions-8-a

// Given the following javascript code:

// function encode(digit1, digit2) {
//   var code = "";

//   function addZeroes(size) {
//     for(var i = 0; i < size; i++) {
//       code += "0";
//     }
//   }

//   function addOnes(size) {
//     for (var i = 0; i < size; i++) {
//       code += "1";
//     }
//   }

//   addZeroes(digit1);
//   addOnes(digit2);

//   return code;
// }

// var code = encode(3, 4);
// console.log(code);

// what will be the output to the console?  0001111

// ### Q13. javascript-functions-9-a

// Given the following javascript code:

// function encode(digit1, digit2, digit3) {
//   var code = "";

//   function addZeroes(size) {
//     for (var i = 0; i < size; i++) {
//       code += "0";
//     }
//   }

//   function addOnes(size) {
//     for (var i = 0; i < size; i++) {
//       code += "1";
//     }
//   }

//   for (var i = 0; i < digit3; i++) {
//     addZeroes(digit1);
//     addOnes(digit2);
//   }

//   return code;
// }

// var code = encode(2, 3, 4);
// console.log(code);

// what will be the output to the console? 00111001110011100111

// ### Q14. product-of-all-other-numbers

// You have an array of integers, and for each index you want to find the
// product of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an
// array of integers and returns an array of the products. However, do not use division in your answer.

// For example:
// getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]); //returns [84, 12, 28, 21]

// In other words, to get to the above answer your function would need to
// calculate: `[7*3*4, 1*3*4, 1*7*4, 1*7*3]

//........................................................................................
// const getProductsOfAllIntsExceptAtIndex = arr => {
//   let productArr = [];
//   arr.forEach(num1 => {
//     let total = arr.reduce((acc, x) => acc * x);
//     productArr.push(total / num1);
//   });
//   return productArr;
// };

// console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));
//........................................................................................

// ###Q15. highest-product-of-3

// Given an array of integers as an argument, write a function called `highestProduct`
// that should return the highest product you can get from any three of the integers.
// Watch out for negative numbers....

// Examples:
// highestProduct([1, 3, 2, 5, 6]); //returns 90 (by multiplying 6 * 5 * 3)
// highestProduct([-10, 5, -10, 5, 10]); //returns 1000 (by multiplying -10 * -10 * 10)
//

//.............................................................................
// const highestProduct = arr =>
//   arr
//     .sort((a, b) => Math.abs(b) - Math.abs(a))
//     .slice(0, 3)
//     .reduce((acc, x) => Math.abs(acc) * Math.abs(x));

// console.log(highestProduct([1, 3, 2, 5, -6]));
//.............................................................................
