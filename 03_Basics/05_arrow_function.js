// this keyword tells about current context
// this refers to global object

// "use strict";

const chai3 = function() {
    console.log(this); // `undefined`
};
// chai3();


const user = {
    username : "pramod",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username} , welcome to website`);  
        console.log(this);     
    }
   
    
}
// user.welcomeMessage()
user.username = "Vicky"
// user.welcomeMessage()

// console.log(this); // {}

function chai() {
    let username = "pramod"
    console.log(this);
    console.log(this.username);    
}

// chai()

const chai2 = function () {
    console.log(this);    
}

// chai2()


// Arrow Function : Remove function keyword and after paranthesis place the arrow

const chai4 = () => {
    let username = "pramod"
    // console.log(this.username);    
    console.log(this);    // {} In arrow function this keyword returning the {}
}

// chai4()

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwoNumbers(3, 5));


// Implicit return // If you don't use curly braces don't have to use return keyword

// const addTwoNumbers = (num1 , num2) =>  num1 + num2

// const addTwoNumbers = (num1, num2) => (num1 + num2)


// If you want to return an object need to user paranthesis and curly braces 
const addTwoNumbers = (num1, num2) => ({username : "hitesh"})
// console.log(addTwoNumbers(1, 2));


const myArray = [1, 2, 3, 4]







function chai1() {
    this.username = "pramod"; // Assign to this
    console.log(this);
    console.log(this.username); // Now it works
}

// chai1();

// Now this.username will log "pramod". But this is generally not a good practice (polluting the global object). Instead, use classes or objects for such cases.


/*
Difference Between function chai() {} and const chai = function() {}:

Hoisting:

function chai() {} is hoisted (can be called before declaration).

const chai = function() {} is not hoisted (cannot be called before assignment).

Syntax:

The first is a function declaration.

The second is a function expression assigned to a const.
*/