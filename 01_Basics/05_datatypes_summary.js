/*
git status 
git add .
git commit -m "message"
git push -u origin branch-name
*/


// Call by Value $ call by reference.

// Primitive (Call by value : Changes are made in copy)

// 7 types: Number, String, Boolean, null, undefined, bigInt, Symbol(To make unique)

const score = 100
const scoreValue = 100.3
const isLoggedIn = true
const outsideTemperature = null
const email = undefined
const name = "pramod"
const bigNumber = 1923743907349873n
// console.log(typeof bigNumber);


const id1 = Symbol("123")
const id2 = Symbol("123")

// console.log(id1); // Symbol(123)
// console.log(id2);
// console.log(id1 == id2); // false

/* Reference (Non - Primitive)

Array, Objects, Functions

Master Objects and browser web events.
*/

const heros = ["ironman", "spiderman", "superman", "batman"]
let myObj = {
    name : "pramod",
    age : 24
}

// Function treating as a variable

const myFunction = function () {
    console.log("hello world");
    // return "nothing";
    // In JavaScript, if a function doesn’t return anything, it implicitly returns undefined
}

// console.log(typeof heros); // object
// console.log(typeof myObj); // object
// console.log(typeof myFunction); // function // Function Object
// console.log(myFunction)
// console.log(myFunction())

/*
console.log(myFunction) logs the function itself.

console.log(myFunction()) logs what the function returns (which is undefined unless you explicitly return something).
*/



// ++++++++++++++++++++++++

// The stack is used for static memory allocation (fixed-size memory). Variables are stored directly with their values.

// The heap is used for dynamic memory allocation (variable-size memory). (variables don’t hold the value directly, just a pointer to the heap).

// Stack (Primitive), Heap (Reference)

let myYoutubeName = "hiteshchoudharydotcom"
let anotherName = myYoutubeName

anotherName = "Chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);


const user1 = {
    name : "pramod",
    upi : "939@ybl"
}

const user2 = user1
// This is reassigning the values not allowed when constand
// user2 = {
//     name : "Reddy",
//     upi : "800ybl"
// }

user2.name = "Reddy"

console.log(user1);
console.log(user2);

/* 

Your code works because:

const only prevents reassigning user1 and user2 to new objects.

It does not prevent modifying the existing object's properties.

Since user1 and user2 reference the same object, changing user2.name also changes user1.name.

For Objects (and Arrays)
const only prevents reassigning the variable, not modifying the object's properties.

const user = { name: "Pramod" };
user.name = "Reddy"; // ✅ Allowed (modifying the object's property)

user = { name: "John" }; // ❌ Error (reassigning the variable)

*/


