/* 
Student Name: Brodie Lewis
Student Number: 040 734 911
Class: MAD9014
Assignment: 5-numbers
REPO:
Date: Feb 6th 2024
*/

// 1. Write a function that accepts three arguments, each with a default value of zero. The function then uses Math.min() or Math.max() to determine which is the largest of the three. Then return the largest of the three numbers.

// Function to return the largest of three numbers
function getMax(a = 0, b = 0, c = 0) {
  // Use Math.max() to find the largest number among a, b, and c
  return Math.max(a, b, c);
}

// Example usage of the function
console.log(getMax(10, 15, 20)); // This will output 20, the largest of the three numbers

/*2. Create a function that creates a random INTEGER between the minimum and maximum values provided as arguments to the function. The random integer needs to be inclusive, 
which means that if 2 and 5 were provided as the min and max then the random number could be 2, 3, 4, or 5. It includes the min and max values as possibilities. Use Math.random() wrapped in Math.floor() to generate the random integer. 
Remember that an integer has no decimal value. The general formula / algorithm for calculating a random number is (random value * (max - min)) + min. */

function getRamdomNumb(min, max) {
  let roundedNumb = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(roundedNumb);
  return roundedNumb;
}

getRamdomNumb(1, 5);

// 3. Declare a variable, randomNumber, and assign it a random integer between 1 and 100 using the Math.random() method. Use the following math methods and print the results:
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
// * Math.round() to round the randomNumber to the nearest integer.
let roundedNumber = Math.round(randomNumber);
console.log(`Rounded with Math.round`, roundedNumber);

// * Math.floor() to round the randomNumber down to the nearest integer.
let flooredNumber = Math.floor(randomNumber);
console.log(`Rounded down with Math.floor`, flooredNumber);
// * Math.ceil() to round the randomNumber up to the nearest integer.
let ceiledNumber = Math.ceil(randomNumber);
console.log("Rounded up with Math.ceil():", ceiledNumber);
// 4. Declare a variable, stringNumber, and assign it a numeric value as a string (e.g., "42").
let stringNumber = "42";
// * Use the parseInt() and parseFloat() methods to convert stringNumber to an integer and a floating-point number, respectively.
let intNumber = parseInt(stringNumber);
let floatNumber = parseFloat(stringNumber);
// * Print both converted values to the console.
console.log("Converted to integer with parseInt", intNumber);
console.log("Converted to float with parseFloat", floatNumber);
