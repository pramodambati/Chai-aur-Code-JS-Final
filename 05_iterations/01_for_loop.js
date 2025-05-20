// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);    
}
// console.log(element);    // ReferenceError: element is not defined

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`5 is best number`);
        // return
        break;
    }
    // console.log(element);    
}

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`5 is best number`);
        continue;
    }
    // console.log(element);    
}

for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} == ${i * j}`);        
    }
    // console.log(`Outer loop value ${i}`);
    
}

let myArray = ['flash', 'batman', 'superman']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}




function processNumbers() {
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            console.log("Found 5");
            break;  // Just exit the loop
        }
        console.log(i);
    }
    console.log("Continuing with other work...");  // This will execute
}

// processNumbers();

/*

Key Difference:
return:

Exits the entire function where the loop is located

No code after the loop will execute

If this is in the global scope (not inside a function), it might cause an error (in strict mode) or be ignored

break:

Only exits the current loop

Execution continues with any code after the loop

Works in any context (inside or outside functions)

Why we need break:
When you only want to exit the loop but continue with the rest of the function

When the loop isn't inside a function (you can't use return in global scope)

When you want more precise control over program flow

*/