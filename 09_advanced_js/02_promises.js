// Promise consuming
// fetch('https:/pramod.com').then().catch().finally

// How to create promises??

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        // console.log(`Async task is completed`); 
        resolve()       
    }, 1000)
})

// What does this resolve, reject parameters are doing??
promiseOne.then(function() {
    // console.log("Promise consumed");
})


new Promise(function(resolve, reject) {
    setTimeout(function() {
        // console.log(`Async task 2 is completed`);
        resolve()
    }, 1000);
}).then(function() {
    // console.log("Async 2 resolved");
})

// 3rd promise

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // console.log("promise there"); // This runs later
        // resolve({username : "pramod", email : "pramodambati1@gmail.com"})
        resolve('hi')
    }, 1000)
    // resolve() //  This runs immediately
})


// All values returned here
// what ever values passed in resolve will be returned in then.
promiseThree.then(function(user) {
    // console.log('user', user); 
})
// resolve is direclty connected with then


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username : "pramodambati", password : "123"})
        } else {
            reject(`ERROR : SOMETHING WENT WRONG`)
        }
    }, 1000);
})

// const userName = promiseFour.then((user) => {
//     console.log(user);
//     return user.username    
// })

// console.log(userName); // We are not getting any value

// chaining

promiseFour
.then((user) => {
    // console.log(user);
    return user.username    
})
.then((username) => {
    // console.log(username);    
})
.catch(function(error) {
    // console.log(error);
})
// .finally(() => console.log('The promise is either resolved or rejected'))


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
         if(!error) {
            resolve({username : "javascript", password : "789"})
        } else {
            reject(`ERROR : JS WENT WRONG`)
        }
    }, 1000)
})

// promiseFive.then()

//async await directly cannot handle errors

async function consumePromvieFive() {
   try {
    const response = await promiseFive
    // console.log(response);
   } catch (error) {
    // console.log(error);
   }
}

// consumePromvieFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data); 
//     } catch (error) {
//         console.log(`E: `, error);        
//     }
// }


// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))



/*
Why It Executes Without Calling
The Promise executes immediately when it's created because:

The Promise constructor takes an executor function that runs right away

In your code, new Promise(...) creates and immediately executes the function you passed to it

This is by design - Promises are eager, meaning they start their work as soon as they're created

The resolve and reject Parameters
These are functions provided by the Promise implementation:

resolve(value): Call this when the async operation succeeds to fulfill the promise

reject(reason): Call this when the async operation fails to reject the promise

When you create a Promise, JavaScript:

Creates the Promise object

Creates two special functions (resolve and reject)

Immediately calls your executor function, passing those two functions as arguments

When you call resolve(value):

The Promise changes state from "pending" to "fulfilled"

Any .then() handlers attached to the Promise will be called with your value

When you call reject(reason):

The Promise changes state from "pending" to "rejected"

Any .catch() handlers or the second argument of .then() will be called

const myPromise = new Promise(function(resolve, reject) {
  // This is the executor function
  // JavaScript automatically passes resolve and reject functions here
  
  setTimeout(() => {
    const success = true; // Imagine this comes from some operation
    
    if (success) {
      resolve("Operation succeeded!"); // Calling the resolve function
    } else {
      reject("Operation failed!"); // Calling the reject function
    }
  }, 1000);
});

*/