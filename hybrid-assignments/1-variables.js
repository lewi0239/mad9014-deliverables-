/* 
Student Name: Brodie Lewis
Student Number: 040 734 911
Class: MAD9014
REPO:
Date: Jan 16 2024
*/

/* 
1. Declare three meaningfully named variables using different keywords (var, let, const). 
Explain the differences between them (write in a comment). 
Now assign primitive values to each variable. Print the values of these variables to the console.
*/

// This The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
let netWorth = 100000;

//The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value. (old way)
var dayOfWeek = "Tuesday";

/* The const declaration declares block-scoped local variables. 
The value of a constant can't be changed through reassignment using the assignment operator, 
but if a constant is an object, its properties can be added, updated, or removed.
*/
const myBirthDate = "January 25th 1993";

//Print the values of these variables to the console:

console.log(netWorth);
console.log(dayOfWeek);
console.log(myBirthDate);

/* 
2. Declare 9 variables of the following data types and then check the data type using the typeof operator: 
undefined, boolean, number, string, bigint, symbol, object, function, null.
*/

// The undefined global property represents the primitive value undefined. It is one of JavaScript's primitive types.
let noValue = undefined;

console.log(typeof noValue);
// The Boolean object represents a truth value: true or false.
let truthyValue = Boolean(true);

console.log(typeof truthyValue);
// Number values represent floating-point numbers like 37 or -9.25.
let numa = 1;

console.log(typeof numa);
// The String object is used to represent and manipulate a sequence of characters.
let myString = "These are letters stringed together";

console.log(typeof myString);
// BigInt - holds numbers that are outside the normal Number range.
const hugeNum = 9007199254740991n;

console.log(typeof hugeNum);
// Symbol - represents a value that is guaranteed to be unique. To be discussed later.
let id = Symbol;

console.log(typeof id);
// The Object datatype is the base object that is used to create all other non-primitive datatypes in JavaScript.
let myObject = new Object();
let myObject2 = {};

console.log(typeof myObject);
console.log(typeof myObject2);

// function is a series of commands that get bundled together so that they can be run, in that order, once or multiple times.
function myMessage(name, message) {
  //a basic function declaration with two arguments
  console.log("Message from " + name + ": " + message);
  return myMessage;
}

myMessage("brodie", "Hello World");

//to prove this is a function:
console.log(typeof myMessage);

/*The null value represents the intentional absence of any object value. 
It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
*/

let blackKettle = null;

console.log(typeof blackKettle);
/* 3. Declare four meaningfully named variables with const. Assign primitive values to two of them and 
any kind of Objects to the other two.
*/

// We're declaring PI to be a constant variable.
const PI = 3.141592653589793;

// The year I was born.
const birthYEar = 1993;

// Simple object for a student
const student = {
  name: ["Brodie", "Lewis"],
  age: 30,
  education: "Full-Stack",
  locker: 2024,
  busPass: true,
};

// Console log student contents.
console.log(student);

// Console log type.
console.log(typeof student);

const planetFacts = {
  radiusMiles: 3959,
  moons: 1,
  nearestPlanet: "Venus" || "Mercury",
  populationInBillions: 8.08,
};

// Console log planets contents.
console.log(planetFacts);

// Console log type.
console.log(typeof planetFacts);

/* 4. Copy the following code snippet that declares two variables and 
then add the code that would let you swap the values inside the two variables. 
After your code runs the value in first should be 42 and the value in second should be 7. 
You need to do this without writing the numbers 7 or 42 in your additional code and without using any functions. 
Use another variable to temporarily hold one of the values while swapping. No functions should be used to do this.
*/

let first = 7;
let second = 42;

// Create a temp variable named num to store value one
let num = first;

// Now swap variables, re-assigning values one to two:
first = second;
second = num;

// console.log finished results:
console.log(first);
console.log(second);
