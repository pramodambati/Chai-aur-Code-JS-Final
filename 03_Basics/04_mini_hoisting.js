function one () {
    const username = "pramod"

    function two () {
        const website = "youtube"
        console.log(username);        
    }

    // console.log(website);

    // two()
}

one()

if (true) {
    const username = "pramod"
    if(username == "pramod") {
        const website = " youtube"
        console.log(username + website);        
    }
    // console.log(website); 
}

// console.log(username);

// Hoisting: The function is hoisted, meaning it can be called before its declaration in the code.

// Syntax: Starts with the function keyword followed by the name.
console.log(addOne(6));

function addOne(num) {
    return num + 1
}

console.log(addOne(5));



//  Not hoisted: Cannot be called before its declaration (since it's a variable assignment).

// console.log(addTwo(10));
const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(7));




/*
Summary Table:
Method	Syntax Example	Hoisted?	this Binding	Notes
Function Declaration	function fn() {}	✅ Yes	Own this	Traditional
Function Expression	const fn = function() {}	❌ No	Own this	Anonymous
Arrow Function	const fn = () => {}	❌ No	Lexical this	No arguments
Named Function Expr.	const fn = function name() {}	❌ No	Own this	Debug-friendly
Constructor Function	new Function('a', 'return a')	❌ No	Own this	Avoid
Generator Function	function* gen() { yield 1; }	✅ Yes	Own this	For iterators
Async Function	async function fn() { await ... }	✅ Yes	Own this	Always returns a promise
*/