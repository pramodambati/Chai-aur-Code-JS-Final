// const tinderUser = new Object() // empty object {}
const tinderUser = {} // both gives empty object

tinderUser.id = '123abc' // modification it works
// tinderUser = "123" // reassignment would fail
tinderUser.name = 'Pramod'
tinderUser.isLoggedIn = false
// console.log(tinderUser); 


/*
Key Difference:
Objects ({}):

const only prevents reassigning the variable (tinderUser = newObject would fail).

You can still modify the object's properties (tinderUser.id = '123abc' works).

Primitives (string, number, boolean etc.):

const a = 'a'
a = 'b'
console.log(a);

const prevents any reassignment (a = 'b' fails).

Primitives themselves are immutable (you can't change 'a' to 'b' in-place).
*/


const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            'first name' : "Pramod",
            lastname : "Ambati"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname["first name"]);
// console.log(regularUser["fullname"]['userfullname']['first name']);


// How to combine objects??

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

const obj3 = {obj1 , obj2}
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj5 = Object.assign({},obj1,obj2)
// console.log(obj5);

/* 
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

*/


// Spread operator
const obj6 = {...obj1, ...obj2}
// console.log(obj6);


// When you get values from database

const users = [
    {
        id : 1,
        email : 'Pramod@gmail.com'
    },
    {
        id : 2,
        email : 'Pramod2@gmail.com'
    },
    {
        id : 3,
        email : 'Pramod3@gmail.com'
    },
    {
        id : 4,
        email : 'Pramod4@gmail.com'
    }
]


// console.log(users[1]);
// console.log(users[1]['email']);
// console.log(users[1].email);

console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // Intresting part is the o/p
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIN')); // false
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

