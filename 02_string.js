// Declaring a string using double quotes
const name = "hitesh";  
console.log(name);  // Output: hitesh

// Declaring a number
const num = 50;  
// Concatenating a string and a number using the + operator (not the preferred method)
console.log(name + " " + num);  // Output: hitesh 50

// Template literals (preferred method for concatenation)
console.log(`Hello, my name is ${name} and my age is ${num}.`);  
// Output: Hello, my name is hitesh and my age is 50.

// Another way to declare a string using the String constructor
const Name = new String('Krish Bahukhandi');  
console.log(Name);  // Output: [String: 'Krish Bahukhandi']

// Accessing a character at a specific index (0-based indexing)
console.log(Name[0]);  // Output: K

// Important String Methods:

// 1. Getting the length of a string
console.log(Name.length);  // Output: 15

// 2. Convert string to uppercase
console.log(Name.toUpperCase());  // Output: KRISH BAHUKHANDI

// 3. Convert string to lowercase
console.log(Name.toLowerCase());  // Output: krish bahukhandi

// 4. Get a character at a specific position
console.log(Name.charAt(2));  // Output: i

// 5. Find the index of a specific character or substring (first occurrence)
console.log(Name.indexOf("B"));  // Output: 6

// 6. Extract a substring from the string
console.log(Name.substring(6, 15));  // Output: Bahukhandi (from index 6 to 15)

// 7. Extract a portion of the string using slice
console.log(Name.slice(6, 15));  // Output: Bahukhandi (same as substring)

// 8. Replace part of a string with another string
console.log(Name.replace("Krish", "Rahul"));  // Output: Rahul Bahukhandi

// 9. Split a string into an array of substrings (based on a separator)
console.log(Name.split(" "));  // Output: ['Krish', 'Bahukhandi']

// 10. Check if a string contains a substring (returns true/false)
console.log(Name.includes("Bahukhandi"));  // Output: true

// 11. Remove whitespace from both ends of a string
const newStr = "   Hello World!   ";
console.log(newStr.trim());  // Output: Hello World!

// 12. Repeat a string multiple times
console.log(Name.repeat(2));  // Output: Krish BahukhandiKrish Bahukhandi

// 13. Check if the string starts with a specific substring
console.log(Name.startsWith("Krish"));  // Output: true

// 14. Check if the string ends with a specific substring
console.log(Name.endsWith("handi"));  // Output: true

// 15. Pad the start of the string with a specific character
console.log(Name.padStart(20, "*"));  // Output: *****Krish Bahukhandi

// 16. Pad the end of the string with a specific character
console.log(Name.padEnd(20, "*"));  // Output: Krish Bahukhandi*****

// 17. Find the last occurrence of a character or substring
console.log(Name.lastIndexOf("a"));  // Output: 10

