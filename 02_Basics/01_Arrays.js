 // array

 const myArr = [0, 1, 2, 3, 4, 'pramod', true]

 // array - copy operations creates a shallow copy(Shares the same reference)
 // Deep copy of an object is a copy whose properties do not share the same reference point.

 const myArr2 = new Array(1, 2, 3, 4)
//  console.log(myArr2);
 
 // Array methods (Let's study using investigative study)

//  myArr.push(6)
//  const arrayLength = myArr.push(88)
//  console.log(myArr);
//  console.log(arrayLength);
//  myArr.pop()
//  console.log(myArr);
 
 
//  myArr.unshift('9')
//  console.log(myArr);
//  myArr.shift()
//  console.log(myArr);
//  console.log(myArr.length);
 
// console.log(myArr);
// console.log(myArr.includes('pramod'));
// console.log(myArr.indexOf(true));


// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof myArr);

// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 4)
console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 4) // original array getting manipulated.
console.log(myn2);
console.log("C", myArr); // C [ 0, 'pramod', true ]



