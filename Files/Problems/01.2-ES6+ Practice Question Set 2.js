//  1. Create an object person with two properties, "name" and "age" and then updates the "age"
//  property to a new value. Initial age should be 30.
// Your code here

const person = {
  name: "pramod",
  age: "30",
  newAge: function (num) {
    return (person.age = num);
  },
};

person.newAge(35);
//  console.log(person.age) // Output: 35

//  2. Write a function that takes an object car and returns true if the car is a sports car (i.e. has a
//  horsepower property greater than or equal to 300)
//Your ES6 code here
function isSportsCar(obj) {
  if (obj.horsepower > 300) {
    return true;
  } else {
    return false;
  }
}
const car1 = { make: "Porsche", model: "911", horsepower: 450 };
const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };
//  console.log(isSportsCar(car1)) // true
//  console.log(isSportsCar(car2)) // false

//   3. Write a function that takes an object person and a number num as arguments and returns true if
//  the person's age plus num is greater than 21. Otherwise, it should return false.
// Your ES6 code here

function isEligible(obj, num) {
  if (obj.age + num > 21) {
    return true;
  }
  return false;
}
//  const person1 = { name: 'Ajay', age: 20 }
//  console.log(isEligible(person1, 1)) // false
//  console.log(isEligible(person1, 2)) // true

//   4. Write a function that takes an object blog and returns true if the blog has more than 1000 views
//  (i.e. has a views property greater than 1000)

function getViews(obj) {
  if (obj.views > 1000) {
    return true;
  }
  return false;
}
// Your ES6 code here
const blog1 = {
  title: "How to Learn JavaScript",
  author: "John Doe",
  views: 1430,
};
const blog2 = {
  title: "10 Reasons to Start a Blog",
  author: "Jane Smith",
  views: 500,
};
//  console.log(getViews(blog1)) // true
//  console.log(getViews(blog2)) // false

// 5. Swap the values of two variables using array destructuring.
let a = 1;
let b = 2;

// [b, a]= [a, b];
// [a, b] = [b, a]; // Only works if a/b were previously declared

let temp = b;
b = a;
a = temp;
// Your ES6 Code here
// console.log(a) // 2
// console.log(b) // 1

//  6. Convert this function into ES6 with least amount of characters.

// function add(a = 30, b = 0) {
//      return a + b
// }

const add = (a = 30, b = 0) => a + b;

// console.log(add(2, 3))

//  7. Write an ES6 function combineObjects with least amount of characters which merges two
//  objects into one.
// Your ES6 function here

function combineObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = combineObjects(obj1, obj2);
//  console.log(combinedObj)

// Expected Output: {a: 1, b: 2, c: 3, d: 4}

//  8. Convert the function getData, into an ES6 function with last amount of characters.
// //  Hint: Destructuring

//  function getData(person) {
//  const name = person.name
//  const address = person.address.city
//  console.log(name) // John Doe
//  console.log(address) // New York
//  }
//  const person2 = {
//   name: 'John Doe',
//   address: {
//     city: 'New York',
//     state: 'NY',
//  },
//  }

//  console.log(...person2);

//  getData(person2)

//  9. Write a function that takes a string as input and returns the string in all uppercase letters.
// Youe ES6 code here

function stringToUpperCase(str) {
  return str.toUpperCase();
}
//  console.log(stringToUpperCase('hello')) // "HELLO"

//   10. Write a function that takes two strings as input and concatenates them together.
// Your ES6 code here

function concatenateStrings(str1, str2) {
  return str1 + str2;
}
//  console.log(concatenateStrings('hello', 'world')) // "helloworld"

//  11. Write a function that takes an array and returns the last element in the array.

function lastElement(arr) {
  return arr[arr.length - 1];
}
// Your ES6 code here
// console.log(lastElement([1, 2, 3, 4, 5])) // 5

// 12. Write a function that takes an array and returns the first element of the array.
// Your ES6 code here
function firstElement(arr) {
  return arr[0];
}
//  console.log(firstElement([1, 2, 3, 4, 5])) // 1

//  13. Write a function that takes an array and a number and returns the sum of first element and the
//  number.
// Your ES6 code here

function sumFirstElement(arr, number) {
  return arr[0] + number;
}
//  console.log(sumFirstElement([1, 2, 3], 5)) // 6

//  14. Write a function that takes an array and returns the sum of first and last element.
// Your ES6 code here

function sumFirstAndLast(arr) {
  return arr[0] + arr[arr.length - 1];
}
//  console.log(sumFirstAndLast([1, 2, 3, 4, 8])) // 9

/*
 15. Write a function that takes an object representing a person's information (name, age,
 occupation) and returns a template literal that includes the person's name and age in a
 sentence. */
// Your ES6 code here
const person1 = { name: "John", age: 25, occupation: "Software Engineer" };
const person2 = { name: "Jane", age: 45, occupation: "Data Analyst" };

function personInfo(obj) {
  return `${obj.name} is ${obj.age} years old`;
}
console.log(personInfo(person1)); // Expected output: "John is 25 years old."
console.log(personInfo(person2)); // Expected output: "Jane is 45 years old.
