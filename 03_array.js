// // Declaration of Arrays
// let fruits = ["Apple", "Banana", "Cherry"]; // Using array literals
// let moreFruits = new Array("Mango", "Pineapple"); // Using the Array constructor

// // Accessing Arrays
// let firstFruit = fruits[0]; // Accessing first element
// let secondFruit = fruits[1]; // Accessing second element
// let numberOfFruits = fruits.length; // Getting the length of the array

// console.log("First fruit:", firstFruit); // "Apple"
// console.log("Second fruit:", secondFruit); // "Banana"
// console.log("Number of fruits:", numberOfFruits); // 3

// // Adding/Removing Elements
// fruits.push("Orange"); // Adds "Orange" to the end
// console.log("After push:", fruits); // ["Apple", "Banana", "Cherry", "Orange"]

// fruits.pop(); // Removes the last element ("Orange")
// console.log("After pop:", fruits); // ["Apple", "Banana", "Cherry"]

// fruits.unshift("Mango"); // Adds "Mango" to the beginning
// console.log("After unshift:", fruits); // ["Mango", "Apple", "Banana", "Cherry"]

// fruits.shift(); // Removes the first element ("Mango")
// console.log("After shift:", fruits); // ["Apple", "Banana", "Cherry"]

// // Accessing Elements
// let bananaIndex = fruits.indexOf("Banana"); // Gets the index of "Banana"
// let hasCherry = fruits.includes("Cherry"); // Checks if "Cherry" is in the array

// console.log("Index of Banana:", bananaIndex); // 1
// console.log("Has Cherry:", hasCherry); // true

// // Transforming Arrays
// let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase()); // Converts all fruits to uppercase
// console.log("Uppercase fruits:", upperCaseFruits); // ["APPLE", "BANANA", "CHERRY"]

// let longNamedFruits = fruits.filter(fruit => fruit.length > 5); // Filters fruits with names longer than 5 characters
// console.log("Long named fruits:", longNamedFruits); // ["Banana", "Cherry"]

// let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0); // Sum of all fruit name lengths
// console.log("Total length of fruit names:", totalLength); // 17

// // Sorting and Reversing
// fruits.sort(); // Sorts the array alphabetically
// console.log("Sorted fruits:", fruits); // ["Apple", "Banana", "Cherry"]

// fruits.reverse(); // Reverses the order of the array
// console.log("Reversed fruits:", fruits); // ["Cherry", "Banana", "Apple"]

// // Combining Arrays
// let combinedFruits = fruits.concat(moreFruits); // Merges two arrays
// console.log("Combined fruits:", combinedFruits); // ["Cherry", "Banana", "Apple", "Mango", "Pineapple"]

// // Extracting Parts of Arrays
// let someFruits = fruits.slice(1, 3); // Gets a portion of the array
// console.log("Sliced fruits:", someFruits); // ["Banana", "Apple"]

// fruits.splice(1, 1); // Removes one element at index 1
// console.log("After splice:", fruits); // ["Cherry", "Apple"]

// // Looping through Arrays
// // Traditional For Loop
// for (let i = 0; i < fruits.length; i++) {
//   console.log("Traditional loop:", fruits[i]);
// }

// // For...of Loop
// for (let fruit of fruits) {
//   console.log("For...of loop:", fruit);
// }

// // forEach Loop
// fruits.forEach(fruit => console.log("forEach loop:", fruit));

// // Other Useful Methods
// let fruitString = fruits.join(", "); // Joins all elements into a string
// console.log("Joined fruits:", fruitString); // "Cherry, Apple"

// let longNamedFruit = fruits.find(fruit => fruit.length > 5); // Finds the first long-named fruit
// console.log("Found long-named fruit:", longNamedFruit); // "Cherry"

// let longNamedFruitIndex = fruits.findIndex(fruit => fruit.length > 5); // Finds the index of the first long-named fruit
// console.log("Index of long-named fruit:", longNamedFruitIndex); // 0


/*
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squaredNumbers); // [1, 4, 9, 16, 25]

*/ 

/* 
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

*/

/* 
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15

*/



