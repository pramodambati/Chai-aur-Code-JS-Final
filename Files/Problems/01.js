// 1. Write a function that takes a user's age and determines if they are old enough to vote (age 18 orolder).

function isEligibleToVote(age) {
    if (age >= 18) {
        return "Eligible to vote"
    } else {
        return "Not eligible to vote"
    }
}

// console.log(isEligibleToVote(20)) // Eligible to vote
// console.log(isEligibleToVote(18)) // Eligible to vote
// console.log(isEligibleToVote(17)) // Not eligible to vote

// 2. Write a function that takes two numbers as input and determines which one is greater.

function isGreater (number1, number2) {
    if (number1 > number2) {
        return `${number1} is greater than ${number2}`
    } else {
        return `${number2} is greater than ${number1}`
    }
}

// console.log(isGreater(2, 5)) // 5 is greater than 2
// console.log(isGreater(10, 5)) // 10 is greater than 5

//  3. Write a function that takes a number as input and determines if it is positive or negative.

function checkNum(number) {
    if (number >= 0) {
        return "Positive Number";
    } else {
        return "Negative Number"
    }
}

// console.log(checkNum(9)) // Positive Number
// console.log(checkNum(-8)) // Negative Number
// console.log(checkNum(22)) // Positive Number


// 4. Write a function that takes a number as input and determines if it is even or odd.
 
function isEvenOdd (number) {
    if (number % 2 == 0) {
        return "Even Number"
    } else {
        return "Odd Number"
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

let val = "Pramod"
// console.log(val);
// console.log(val[0]);
// console.log(val[0].toLowerCase());


function checkForAlphabetA (name) {
    for (let i = 1; i < name.length; i++) {
       if (name[i].toLowerCase() == 'a') {
            return "Includes a"
       }
    } 
    return "Does not include a"
}
//  console.log(checkForAlphabetA('Tanay')) // Includes a
//  console.log(checkForAlphabetA('Jeep')) // Does not include a
//  console.log(checkForAlphabetA('Jane')) // Includes a
//  console.log(checkForAlphabetA('Fuck')) // Does not include a

//  6. Write a function that takes a string as input and determines if it is longer than 5 characters.

 function checkLength(value) {
    if (value.length > 5) {
        return 'more than 5 characters'
    } else {
        return "less than 5 characters"
    }
 }

 console.log(checkLength('Programming')) // more than 5 characters
 console.log(checkLength('Jeep')) // less than 5 characters

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
}


console.log(size("Programming"));

*/