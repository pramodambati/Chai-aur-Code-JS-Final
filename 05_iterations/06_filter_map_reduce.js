const coding = ["js", "python", "java", "ruby", "cpp"]


// forEach not returning any values.

// let values = coding.forEach( (item) => {
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10]

// filter returning the values

const newNums = myNums.filter( (num) => num >4)
// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

const newNums1 = myNums.filter( (num) => {
    num > 4
})
// console.log(newNums1); // []

const newNums2 = myNums.filter( (num) => {
    return num > 4
})
// console.log(newNums2); // [ 5, 6, 7, 8, 9, 10 ]

// How to each filter in forEach ??

const newNums3 = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums3.push(num)
    }
})

// console.log(newNums3);


// For each doesn't return anything.
let newNums4 = []
newNums4 = myNums.forEach( (num, index, arr) => {
    // console.log(num);
    // console.log(num, index);
    // console.log(num, index, arr);
    // console.log(num > 4);
    return num > 4
})
// console.log(newNums4);

myNums.filter( (num, index, arr) => {
    // console.log(num);
    // console.log(num, index, arr); 
})

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


let userBooks = books.filter( (bk) => bk.genre === "History")
// console.log(userBooks);

userBooks = books.filter( (bk) => { 
    return (bk.publish >= 1995 && bk.genre === "History")
 })
console.log(userBooks);

