/* 
Student Name: Brodie Lewis
Student Number: 040 734 911
Class: MAD9014
Assignment: 3-function
REPO:
Date: Jan 31st 2024
*/

/*For each item, write the function AND the call to the function, passing any required values for testing: */

/*1. than 50 return true, otherwise return false.*/

function is50true(num) {
  return num === 50 ? console.log("true") : console.log("its not equal 50");
}
is50true(49); //test false case
is50true(50); //test truthy case

/*2. Write a function which accepts two arguments, one of the argument should have a default value of zero. Function should add both numbers and return the sum.*/
function sumfn(a = 0, b = 0) {
  let sum = a + b;
  console.log(sum);
  return sum;
}

sumfn(10, 10);
sumfn(15, 30);

/*3.  Write an IIFE (Immediately Invoked Function Expression) that returns your name and assigns the return value to a variable called name.*/

let name = (function () {
  let myName = "brodie";
  return myName;
})();
