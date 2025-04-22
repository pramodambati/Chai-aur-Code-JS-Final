// let score = 33
// let score = "33" (value => Datatype)
// let score = null // 0 => number
// let score = undefined // Nan => number
// let score = "33ABC" // NaN (not a number) => number
let score = true // 1 => number

// const {score} = req.body

// console.log(typeof(score));
// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(valueInNumber);
// console.log(typeof valueInNumber); // pakka it's a number


// "33" => 33
// "33abc" => Nan
// true => 1; false=> 0

let isLoggedIn = " "

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log('isLoggedIN  '  + booleanIsLoggedIn);

// 1 => true; 0 =>false
// "" =>false
// "pramod", " " =>true

let someNumber = 33

let StringNumber = String(someNumber)
// console.log("stringNumber ", StringNumber);
// console.log("type of stringNumber ", typeof StringNumber);


/**************************Operations ***********************/

let str1 = "hello"
let str2 = "pramod"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32


// console.log( (3 + 4) * 5 % 3);
// console.log( 3 + 4 * 5 % 3); // where did you learn this messy code they will question.

// console.log(true);
// console.log(+true); //1
// console.log(true+); // Unexpected token
// console.log(+""); // 0 // INVESTIGATION STUDY

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // Why to write the confusion code

let gameCounter = 100
gameCounter++ // post fix
++gameCounter // prefix
console.log(gameCounter);

/* 
The increment (++) operator increments (adds one to) its operand 
and returns the value before or after the increment, 
depending on where the operator is placed. */

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


