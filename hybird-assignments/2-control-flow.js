/* 
Student Name: Brodie Lewis
Student Number: 040 734 911
Class: MAD9014
Assignment: 2-control-flow
REPO:
Date: Jan 31st 2024
*/

/* 
1. Take the code below and add two if statements around the two console.log statements, 
so that the first console command only runs if the value of id is greater than 5 and 
the second console command only runs if the value of id is NOT equal to 17.
*/

let id = 3;

if (id > 5) {
  //if id > 5
  console.log("The value of id is greater than 5.");
} else if (id !== 17) {
  //if id does not equal 17
  console.log("The value of id is NOT 17.");
}

/* 2. Create a variable representing the score of a student (numeric values). 
Write nested if-else statement to determine the overall grade for each student:

If the score is greater than or equal to 90, the grade is "A."
If the score is between 80 and 89, the grade is "B."
If the score is between 70 and 79, the grade is "C."
If the score is below 70, the grade is "F."
Print the overall grade for each student.

*/

let studentScore = 75;

if (studentScore >= 90) {
  console.log("the grade is an A");
} else if (studentScore <= 89 && studentScore >= 80) {
  console.log("the grade is a b");
} else if (studentScore <= 79 && studentScore >= 70) {
  console.log("the grade is a c");
} else if (studentScore < 70) {
  console.log("the grade is a f");
}

/*
Write in a multiline comment, what is truthy and falsey in javascript. List all possible falsey values in javascript:

In JavaScript, values are either truthy or falsy. Truthy values are those that evaluate to true in a Boolean context. Most values are truthy except for a specific set of values known as falsy values. 
Falsy values in JavaScript include:
- false: the boolean false
- 0: the number zero
- -0: negative zero
- 0n: BigInt representing zero
- "": empty string
- null: null value
- undefined: undefined value
- NaN: Not a Number
- document.all: HTMLAllCollection

All other values, including all objects, are considered truthy.


*/
