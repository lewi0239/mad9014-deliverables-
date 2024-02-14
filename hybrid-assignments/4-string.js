/* 
Student Name: Brodie Lewis
Student Number: 040 734 911
Class: MAD9014
Assignment: 4-string
REPO:
Date: Jan 31st 2024
*/

/*For each item, write the function AND the call to the function, passing any required values for testing: */

/*
Write a function which will accept, firstName and lastName as argument. Then Concatenate these variables to create a third variable, fullName. 
Print fullName to the console. Also return the fullName.*/
function nameGen(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  console.log(fullName);
  return fullName;
}

nameGen("Brodie", "Lewis");
/*
Write a function that will accept a randomString and returns the length of that string.
*/

function getStringLength(randomString) {
  return randomString.length;
}

// Example function call
console.log(getStringLength("this is crazy, right?"));
console.log(getStringLength("wow can this really read the character length?"));
console.log(getStringLength("12345"));

/*Write a function that accepts a String as an argument and returns the first word from the String in lowercase. 
Use the split method to divide the sentence into words. Eg: If Hello my name is Jeffrey Lebowski is sent to the function hello would be returned.
*/

function getFirstWordLowerCase(lowerCase) {
  let firstWord = lowerCase.split(" ");
  console.log(firstWord[0].toLowerCase());
}

getFirstWordLowerCase("TEST one two three");

/*Create a function that accepts a Number as an argument, converts the Number to a String, and 
then uses the padStart() method to make sure that the String has at least 20 characters. The filler text is the number zero.
*/

function getStringFromNumber(data = 0) {
  // Convert the data to a string
  let getString = data.toString();

  // Check if the data is not a number using isNaN() since NaN === NaN is false
  if (isNaN(data)) {
    console.log("not a number");
  } else {
    console.log("its a number");
    // Ensure the string is at least 20 characters, padding with zeros if necessary
    getString = getString.padStart(20, "0");
  }

  // Log the final string
  console.log(typeof getString);
}

getStringFromNumber(20);

/*Create a function that accepts a String as an argument. It then uses the includes() method to determine if the String contains an @ sign. 
If it does, then use the indexOf method to determine the position in the String of the @ sign. 
The function will return false if there is no @ sign or the position integer if one does exist.
*/

function getAtPosition(string) {
  // Check if the string includes an @ sign
  if (string.includes("@")) {
    // Find and return the position of the @ sign
    return string.indexOf("@");
  } else {
    // Return false if there is no @ sign in the string
    return false;
  }
}

console.log(getAtPosition("lewis.evault@gmail.com"));
