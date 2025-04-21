// let score = 33
// let score = "33" (value => Datatype)
// let score = null // 0 => number
// let score = undefined // Nan => number
// let score = "33ABC" // NaN (not a number) => number
let score = true // 1 => number

// const {score} = req.body

console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber); // pakka it's a number


// "33" => 33
// "33abc" => Nan
// true => 1; false=> 0

let isLoggedIn = " "

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log('isLoggedIN  '  + booleanIsLoggedIn);

// 1 => true; 0 =>false
// "" =>false
// "pramod", " " =>true

let someNumber = 33

let StringNumber = String(someNumber)
console.log("stringNumber ", StringNumber);
console.log("type of stringNumber ", typeof StringNumber);
