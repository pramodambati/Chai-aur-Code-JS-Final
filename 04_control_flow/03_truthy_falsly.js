// const userEmail = "Pramod@AI.com"
// const userEmail = []
// const userEmail = ""
// const userEmail = false
const userEmail = function name(params) {}

if (userEmail) {
    // console.log("Got user email");
} else {
    // console.log("Don't have user email");
}

// falsy Values

// false, 0, -0, BigInt (0n), "", null, undefined, NaN

// truthy values

// "0", "false", " ", [], {}, function () {}

myarray = []
if (myarray.length === 0) {
    // console.log("Array is empty");
}

const emptyObj = {}

// console.log(emptyObj);
// console.log(emptyObj.length); // there is no length function
// console.log(undefined == 0); // false

if(emptyObj.length === 0){ // so it's not entering the if block
    console.log("Empty object");  
}

// console.log(Object.keys(emptyObj));
// console.log(Object.keys(emptyObj).length); // 0

if(Object.keys(emptyObj).length === 0){ 
    console.log("Empty object");  
}

// Nullish Coalescing Operator (??): null undefined

let val

val = 5 ?? 10

// console.log(val);

let val1 = null ?? 10
// let val1 = null ?? complex function
// console.log(val1);


let val2 = undefined ?? 15
// console.log(val2);

let val3 = null ?? 10 ?? 15 
// console.log(val3);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 70

iceTeaPrice >= 80 ? console.log("Less than 80"): console.log("More than 80");


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

/*

In JavaScript, the ?? operator is called the nullish coalescing operator. It returns the right-hand side operand when the left-hand side operand is null or undefined; otherwise, it returns the left-hand side operand.

Let's break down the expression let val3 = null ?? 10 ?? 15:

First evaluation (null ?? 10):

The left-hand side is null, so the operator returns the right-hand side, which is 10.

Now the expression becomes 10 ?? 15.

Second evaluation (10 ?? 15):

The left-hand side is 10 (not null or undefined), so the operator returns 10.

Thus, val3 is assigned 10, and the output of console.log(val3) is: */