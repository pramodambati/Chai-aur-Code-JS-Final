// Story of scopes begin with three keywords => let var const
var a = 1;
let b = 2;
const c = 3;
console.log(a);
console.log(b);
console.log(c);

// Curly braces {} => Scope

var f = 300
let d = 100
//Problems
if(true){
    let d = 10;
    const e = 20;
    var f = 30; //It can be redelcared plus re-initialized
    let a = 40
    console.log(`INNER : `, a)
}

console.log(`OUTER : `, a)
console.log(d); //This will throw error as we are trying to access d outside block of if conditional
console.log(e); //This will also throw error are we are trying to access e outside block of if conditional
// console.log(f); //This will print 30 => And that is a problem, it shouldn't be accessed the block

//Note! => code written in global scope can be accessed in the block scope but the vice-versa is not true

//Note! => Global Scope in console and node js environment (production code) is different 

