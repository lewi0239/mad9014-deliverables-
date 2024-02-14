/* 
Student Name: Brodie Lewis
Student Number: 040 734 911
Class: MAD9014
Assignment: 6-arrays
REPO:
Date: Feb 12th 2024
*/

// For first two, write the function AND the call to the function, passing any required values for testing:

// Write a function that accepts a single Array of Strings as an argument.
// The function will create a new Array with all the Strings from the original Array converted to uppercase. Then the function returns the new Array.
function getUpperCase() {
  const array = ["React", "Angular", "Vue", "Svelte"];
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    let capitalizeArray = array[i].toUpperCase();
    newArray.push(capitalizeArray);
  }
  console.log(newArray);
}
getUpperCase();
// Write a function that accepts an Array of Strings.
// The function will use the map() method to create a new array which holds the length of each string. Return the new array with the lengths.
function getlengthOfArray() {
  let cheeses = ["Gouda", "Cheddar", "Brie"];
  let newArr = cheeses.map(function (item, index, arr) {
    console.log(item.length);
  });
}

getlengthOfArray();
/*
Imagine you have a array with fruit names:
let arr = ['apple', 'orange', 'grapes', 'banana', 'kiwi'];
use any three array methods to achieve:

let arr = [ 'apple', 'blueberry', 'grapes', 'banana', 'strawberry' ];
*/

let fruits = ["apple", "orange", "grapes", "banana", "kiwi"];
fruits.pop();
fruits.push("strawberry");
let index = 1;
fruits.splice(index, 1, "blueberry");
console.log(fruits);
