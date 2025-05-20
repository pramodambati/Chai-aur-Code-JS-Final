const coding = ["js", "python", "java", "ruby", "cpp"]


// forEach not returning any values.

// let values = coding.forEach( (item) => {
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)
const newNums2 = myNums.filter( (num) => {
    num > 4
})
const newNums3 = myNums.filter( (num) => {
    return num > 4
})

const newNumsForEach = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNumsForEach.push(num)
    }
})
// console.log(newNumsForEach);


// console.log(newNums);
// console.log(newNums2); // []
// console.log(newNums3);
