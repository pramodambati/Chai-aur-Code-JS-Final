// Below are array specific loops

const arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

//  for of loop

for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    if (greet == " "){
        // continue
    }
    // console.log(`Each char is ${greet}`);
}

/*
const obj = {
    1 : "hi",
    2 : "hello",
    1 : "pramod1",
    3 : "pramod3",
    3 : "pramod3"
}
console.log(obj);
console.log(typeof obj);


const map = new Map()
map.set(1 , "hi")
map.set(2 , "hello")
map.set(1 , "pramod1")
map.set(3 , "pramod3")
map.set(3 , "pramod3")
console.log(map);
console.log(typeof map); 
*/

const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('USA', "United States of America")
map.set('IN', "India")

// console.log(map);
// console.log(map.size);
// console.log(map.keys());

const keys = Array.from(map.keys());
// console.log(keys);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const value = map.get(key)
    // console.log(key, value);
    
}

// for of loop on map

for (const [key, val] of map) {
    // console.log(key, ':-' ,val);
}


//  can i use for of loop on object ? NO

const obj2 = {
    "IN" : "India",
    "FR" : "France",
    Uk : "United Kingdom"
}

// console.log(obj2);
// console.log(Object.keys(obj2));

// TypeError: obj2 is not iterable
// for (const [key, val] of obj2) {
//     console.log(key, val);
// }

