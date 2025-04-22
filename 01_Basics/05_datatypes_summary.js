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

console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function // Function Object
console.log(myFunction)
console.log(myFunction())

/*
console.log(myFunction) logs the function itself.

console.log(myFunction()) logs what the function returns (which is undefined unless you explicitly return something).
*/



