// functions and parameters

// Function to add two numbers

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);    
// }


function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result
    console.log("pramod");    
}
addTwoNumbers(2, 3) 
const result = addTwoNumbers(2, 3)
console.log(result);

// addTwoNumbers(2)

// addTwoNumbers(2, 13, 4)
// addTwoNumbers(2, '13')
// addTwoNumbers(2, 'a')
// addTwoNumbers(2, null)

// const addTwoNumber = function(number1, number2) {
//     console.log(number1 + number2);    
// }
// addTwoNumber(2, 4)
// console.log(addTwoNumber(2, 3));


/*

The function addTwoNumber is called again with arguments 2 and 3.

Inside the function, console.log(number1 + number2) executes, which is console.log(2 + 3) → console.log(5).

Output: 5 (printed to the console).

Again, the function does not return anything, so it returns undefined.

Now, the outer console.log() captures the return value of addTwoNumber(2, 3), which is undefined, and prints it.

Output: undefined. */

function loginUserMessage(username) {
    // if (username === undefined) {
    //     console.log('Please enter a username');
    //     return
    // }
     if (!username) {
        console.log('Please enter a username');
        return
    }
    return `${username} just logged in`
}

function loginUserMessage2(username = "pramod") {
     if (!username) {
        console.log('Please enter a username');
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage2());


