const myNumbers = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10]

// Add + 10 for each of the number in array

// myNumbers.filter( (num) => console.log(num + 10))

// console.log(myNumbers); // Original arrray is not getting effected

const newNums = myNumbers.map( (num) => num + 10)
// console.log(newNums);
// console.log(myNumbers);

const newNums1 = []

myNumbers.forEach( (num) => {
    // console.log( num + 10);  
})


// chaining (You can use 2-3 methods at a time)

const newNums2 = myNumbers
                        .map((num) => num * 10)
                        .map((num) => num + 1)
                        .filter((num) => num >= 40)

console.log(newNums2);
