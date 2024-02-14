/* 
Student Name: Brodie Lewis
Student Number: 040 734 911
Class: MAD9014
Assignment: 7-objects
REPO:
Date: Feb 12th 2024
*/

/* 1. Copy the following code snippet and convert all the dot notation into square bracket syntax.

*/
const obj = {
  a: "first letter",
  b: 123,
  c: true,
  d: [
    { id: 11, name: "emilia" },
    { id: 22, name: "tessa" },
    { id: 33, name: "naomi" },
  ],
  e: {
    age: 17,
    email: "bob@home.org",
  },
};
//convert the lines below here
console.log(obj["a"]);
console.log(obj["d"][1]["name"]);
console.log(obj["e"]["age"]);

/*2. Declare an object, person, with the following properties:
 * firstName (string)
 * lastName (string)
 * age (number)
 * isStudent (boolean)
 */

let person = {
  firstName: "brodie",
  lastName: "lewis",
  age: 31,
  isStudent: true,
};

/*3. Add a new property, city, to the person object with a string value.
 * Print the person object to the console.
 * Use the delete operator to remove the isStudent property from the person object.
 * Print the updated person object to the console.
 */

person.city = "Ottawa";
delete person.isStudent;

console.log(person);

// 4. Declare an object, car, with properties like make, model, year, etc.
//Use a for...in loop to iterate over the properties of the car object and
//print them to the console.

let car = {
  make: "Honda",
  model: "civic",
  year: 1993,
  transmission: "automatic",
  color: "red",
};

for (let prop in car) {
  console.log(car[prop]);
}

// 5. Create a function that accepts an Object and a String as arguments. The function then needs to check if the Object has a property with a name that matches the String argument.
// Use hasOwnProperty() to check for existence. If it does then use delete to remove the property.

//create a function that accepts an object and a string as arguments:
let stock = {
  companyName: "Apple",
  stockSymbol: "AAPL",
  stockPrice: 182,
  marketCap: 2.82e12,
  sector: "Technology",
};

function removePropertyIfExist(obj, propName) {
  //Check if the object has a property with a name that matches the string argument:
  if (obj.hasOwnProperty(propName)) {
    //Use hasOwnProperty() to check for existence. If it does then use delete to remove the property.s
    delete obj[propName];
    console.log(`This property ${propName} has been removed`);
  } else {
    console.log(`Property ${propName} does not exist`);
  }
}

removePropertyIfExist(stock, "sector");
console.log(stock);
