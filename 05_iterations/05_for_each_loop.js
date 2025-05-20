// Higher order function for each
/*
const coding = ["js", "python", "java", "ruby", "cpp"]

// call back function (don't have name) give me a function what to do

coding.forEach( function (item) {
    // console.log(item); 
})

// You can use arrow function

coding.forEach( (val) => {
    // console.log(val);
})

function addTwoNumbers(num1, num2) {
    return num1 + num2
}


// Arrow functions are used as function expression 

const addTwoNumbers1 = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwoNumbers(1,2));
// console.log(addTwoNumbers1(2, 3));


function printMe(item) {
    // console.log(item);
}

coding.forEach(printMe) // We need to give reference
// coding.forEach(printMe())

coding.forEach( (item) => {
    // console.log(item);    
})
coding.forEach( (item,index) => {
    // console.log(item, index);    
})
coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);    
})
*/
const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item);
    console.log(item.languageName);
});
