// Literal and constructor(singleton will be created) Object.Create

// object literals

// By default system process key as string eg : "name"

const mySym = Symbol("key1")

const JsUser = {
    name : "pramod",
    "full name" : "Pramod Reddy Ambati",
    mySym : "myKey1",
    [mySym] : "myKey1",
    age : 24,
    location : "Hyderabad",
    email : "pramod@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ['Monday', 'Thursday']
}

// how to access the objects 2 ways
// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser["full name"]);
// console.log(JsUser);

// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym); // String
// // Correct way to access a symbol 
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);  // String


JsUser.email = "pramod@google.com"
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email = "pramod@chatgpt.com"
// console.log(JsUser);


// Functions in JS is type 1 citizen

JsUser.greeting = function () {
    console.log("hello Js User");
}

// console.log(JsUser);
// console.log(JsUser.greeting); // function reference we got.
// console.log(JsUser.greeting()); // by default in javascript function returns a value.
// If nothing is returning it returns undefined.


JsUser.greeting2 = function () {
    console.log(`hello Js User, ${this.name}`);
}

console.log(JsUser);
console.log(JsUser.greeting2());



