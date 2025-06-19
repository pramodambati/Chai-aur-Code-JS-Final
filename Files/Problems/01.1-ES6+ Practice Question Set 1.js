// 1. Write a function that takes a user's age and determines if they are old enough to vote (age 18 orolder).

function isEligibleToVote(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

// console.log(isEligibleToVote(20)) // Eligible to vote
// console.log(isEligibleToVote(18)) // Eligible to vote
// console.log(isEligibleToVote(17)) // Not eligible to vote

// 2. Write a function that takes two numbers as input and determines which one is greater.

function isGreater(number1, number2) {
  if (number1 > number2) {
    return `${number1} is greater than ${number2}`;
  } else {
    return `${number2} is greater than ${number1}`;
  }
}

// console.log(isGreater(2, 5)) // 5 is greater than 2
// console.log(isGreater(10, 5)) // 10 is greater than 5

//  3. Write a function that takes a number as input and determines if it is positive or negative.

function checkNum(number) {
  if (number >= 0) {
    return "Positive Number";
  } else {
    return "Negative Number";
  }
}

// console.log(checkNum(9)) // Positive Number
// console.log(checkNum(-8)) // Negative Number
// console.log(checkNum(22)) // Positive Number

// 4. Write a function that takes a number as input and determines if it is even or odd.

function isEvenOdd(number) {
  if (number % 2 == 0) {
    return "Even Number";
  } else {
    return "Odd Number";
  }
}

//  console.log(isEvenOdd(5)) // Odd Number
//  console.log(isEvenOdd(8)) // Even Number
//  console.log(isEvenOdd(10)) // Even Number

// 5. Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

/*
 Instructions: Avoid usage of in-built methods in javaScript. You can make use of basic methods
 such as .length, toLowerCase(), toUpperCase(), push() if needed. Make use of for-loops and if-else
 statements wherever needed 
 */

// function checkForAlphabetA(name) {
//     if (name.includes('a')) {
//         return "Includes a"
//     } else {
//         return "Does not include a"
//     }
// }

// Very good Pramod Learning happens in this way.

let val = "Pramod";
// console.log(val);
// console.log(val[0]);
// console.log(val[0].toLowerCase());

function checkForAlphabetA(name) {
  for (let i = 1; i < name.length; i++) {
    if (name[i].toLowerCase() == "a") {
      return "Includes a";
    }
  }
  return "Does not include a";
}
//  console.log(checkForAlphabetA('Tanay')) // Includes a
//  console.log(checkForAlphabetA('Jeep')) // Does not include a
//  console.log(checkForAlphabetA('Jane')) // Includes a
//  console.log(checkForAlphabetA('Fuck')) // Does not include a

//  6. Write a function that takes a string as input and determines if it is longer than 5 characters.

function checkLength(value) {
  if (value.length > 5) {
    return "more than 5 characters";
  } else {
    return "less than 5 characters";
  }
}

//  console.log(checkLength('Programming')) // more than 5 characters
//  console.log(checkLength('Jeep')) // less than 5 characters

/*

// Extra by me: Create a length function which determines the length of the variable..

// Edge cases : 
// I/P : ""
// O/P : 0

// I/P : "Pramod"
// O/P : 6

// I/P : undefined
// O/P : 0

let a = ''
let b = 'Pramod'
let c = undefined
let d = null
let e = [1, 2, 3, 4]

// console.log(a.length);
// console.log(b.length);
// console.log(c.length);
// console.log(d.length);
// console.log(e.length);

function size(value) {
    let count = 0
    for (let i = 0; ;i++ ) {
        if(value[i] === undefined) {
          break;
        }
        count ++
    }  
    return count



console.log(size("Programming"));

*/

// 7. Write a function that takes a number as input and determines if it is between 1 and 10.
// Your ES6 Code here

function isBetweenOneAndTen(num) {
  if (num > 0 && num <= 10) {
    return true;
  } else {
    return false;
  }
}

// console.log(isBetweenOneAndTen(5)) // true
// console.log(isBetweenOneAndTen(11)) // false

// 8. Write a function that takes a string as input and determines if it contains the word "hello".
// Your ES6 code here

function isHelloPresent(str) {
  if (str.toLowerCase().includes("hello")) {
    return true;
  } else {
    return false;
  }
}
//  console.log(isHelloPresent('Hello World')) // true
//  console.log(isHelloPresent('World')) // false

//  9. Write a function that takes a number as input and determines if it is a multiple of 3.
// Your ES6 code here
function isMultipleOfThree(num) {
  if (num % 3 == 0) {
    return true;
  } else {
    return false;
  }
}

//  console.log(isMultipleOfThree(5)) // false
//  console.log(isMultipleOfThree(9)) // true

//  10. Write a function which takes in a number as input and returns it after multiplying by 10.
// Your ES6 code here

function multiplyByTen(num) {
  return num * 10;
}
//  console.log(multiplyByTen(20)) // 200
//  console.log(multiplyByTen(40)) // 400

//  11. Console individual values of the product object using object destructuring.
const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple",
};
// Your ES6 code here

const { title, price, description } = product;
//  console.log(title) // iPhone
//  console.log(price) // 5999
//  console.log(description) // The iPhone is a smartphone developed by Apple

// 12. Create an object book with properties title, author, and pages. Create a function getBookDetails
//  that takes a book object as a parameter and returns if the book has more than 100 pages.
// Your ES6 code here

const book = {
  title: "My life",
  author: "pramu",
  pages: "101",
};

const book2 = {
  title: "your life",
  author: "pramu",
  pages: "11",
};
function getBookDetails(myobj) {
  if (myobj.pages > 100) {
    return true;
  } else {
    return false;
  }
}
//  console.log(getBookDetails(book)) // logs 'true' if the pages are above 100
//  console.log(getBookDetails(book2)) // logs 'false' if the pages are 100 or below

// 13. Create a function changeOccupation that takes an object person and a string newOccupation as
//  parameters, and changes the occupation property of the person object to the newOccupation.
//  Log the person object to the console before and after calling the function.
// Your ES6 code here

const person = {
  name: "Amit",
  age: 25,
  occupation: "Software Engineer",
};

function changeOccupation(myobj, str) {
  myobj.occupation = str;
  return myobj;
}

//  console.log(person)
changeOccupation(person, "Product Manager");
//  console.log(person)

//  14. Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each
//  number to the console.
const numbers = [1, 2, 3];

const [a, b, c] = numbers;
// Your ES6 code here
//  console.log(a) // logs 1 to the console
//  console.log(b) // logs 2 to the console
//  console.log(c) // logs 3 to the console

//   15. Convert the given function into ES6 with least amount of characters.
function defaultParamsFunc(a, b, c) {
  if (c === undefined) {
    c = 4;
  }
  return a * b * c;
}
console.log(defaultParamsFunc(3, 1)); // 12
console.log(defaultParamsFunc(3, 10)); // 120

//   15. Convert the given function into ES6 with least amount of characters.
function defaultParamsFunc(a, b, c = 4) {
  return a * b * c;
}
console.log(defaultParamsFunc(3, 1)); // 12
console.log(defaultParamsFunc(3, 10)); // 120

const defaultParamsFunc = (a, b, c = 4) => a * b * c;

console.log(defaultParamsFunc(3, 1)); // 12
console.log(defaultParamsFunc(3, 10)); // 120
