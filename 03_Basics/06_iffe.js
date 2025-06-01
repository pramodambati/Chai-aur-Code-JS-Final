// Immediately Invoked Function Expressions (IIFE)

// When you want to close a file immediately

// Start DB connection immediately

// To avoid pollution from the global scope

function chai() {
    console.log(`DB CONNECTED`);    
}

chai();

(function chai1() {
    // Named IIFE
    console.log(`DB CONNECTED two`);    
}());

// (function definition)(execution call)

((name) => {
    // SIMPLE IIFE
    console.log(`DB CONNECTED 3 ${name}`);
    // console.log(this); // {}
})('pramod')

// After writing IIFE you need end ; Where to stop context

