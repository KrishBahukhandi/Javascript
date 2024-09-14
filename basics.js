//VARIABLES
// let: Used to declare variables that can be reassigned later.
// const: Used to declare variables that cannot be reassigned (constant values).
// var: An older way of declaring variables, generally avoided in modern code.

let age = 25;   // Using let
const name = 'Alice'; // Using const
// Example of var (not recommended in modern JavaScript)
var country = 'USA';
console.log(age);
console.log(name);
console.log(country);


// DATA TYPES

// Numbers: Integers, floats, etc.
let num = 30;
let price = 19.99;
console.log(num);
console.log(price);

//Strings: Text, enclosed in single or double quotes.
const fullName = 'Alice wether';
console.log(fullName);

//Booleans: Represents true or false.
let isLoggedIn = true;

//Undefined: A variable that has been declared but not assigned a value.
let notAssigned;

//Null: Represents an intentional absence of any value.
let emptyValue = null;

//Objects: Complex data type used to store collections of data.
let user = {
    name: 'Alice',
    age: 25
};

//Arrays: A special type of object used to store lists of data.
let colors = ['red', 'green', 'blue'];


// OPERATORS

let a = 5;
let b = 3;

let sum = a + b;  // 8
let difference = a - b;  // 2
let product = a * b;  // 15
let quotient = a / b;  // 1.6667
let remainder = a % b;  // 2

// Comparison operators
let x = 5;
let y = '5';

console.log(x == y);  // true (only compares value)
console.log(x === y);  // false (compares both value and type)

// == : Equal to
// === : Strict equal (compares both value and type)
// != : Not equal
// !== : Strict not equal
// > : Greater than
// < : Less than
// >= : Greater than or equal to
// <= : Less than or equal to


// CONDITIONAL STATEMENTS

// if statement
let age1 = 20;

if (age1 >= 18) {
  console.log("You are an adult.");
}

// if else statement

let age2 = 16;

if (age2 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}


// else if statement
let score = 85;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 80) {
  console.log("B grade");
} else {
  console.log("C grade");
}

