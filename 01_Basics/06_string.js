const name = "pramod"
const repoCount = 7

// console.log(name + repoCount + "value");

// String interpolation we can do many things on the go. Like using string methods
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// How to declare a string.

const gameName = new String('Pramod-Reddy') // This is string in object
// copy this and paste in browser console log

// console.log(typeof gameName); // Object

// mastering methods in strings is the wining the game

// console.log(gameName[0]);
// console.log(gameName[19]); // undefined
// console.log(gameName.__proto__); // {} empty object

// console.log(gameName.toUpperCase()); // It will return the new string rather than modifying the original string(Immutabilit)
// console.log(typeof gameName.toUpperCase()); // wtf STRING

/*
Key Points:
charAt(index):

Converts index to a number (or uses 0 if conversion fails).

Returns an empty string ('') if the index is out of bounds (e.g., charAt(100)).

Why 'm' becomes 0:

JavaScript's type coercion fails for 'm' → NaN → treated as 0.
*/

// console.log(gameName.charAt(3));
// console.log(typeof gameName.charAt(100)); // empty string
// console.log(gameName.charAt('m'));

// console.log(gameName.indexOf('t'))
// console.log(gameName.indexOf('a'))


const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-9, 6) // understand this

// console.log(anotherString);

const newStringOne = "        pramod@gmail.com   "
// console.log(newStringOne.trim);
// console.log(newStringOne.trim());

const url = "https://pramod.com/pramod%20reddy"

console.log(url.replace('%20', '-'));
console.log(url.includes('ra'));
console.log(gameName.split('-')); // gives an array

 



 