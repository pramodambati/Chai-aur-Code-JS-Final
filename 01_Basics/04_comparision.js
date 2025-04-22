// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// // console.log(2 =< 1); // This is wrong notation
// console.log(2 == 1);
// console.log(2 != 1);

// Comparision confusion when we don't have same datatype.

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*
The reason is that an equaltiy check == and comparisions >, >=, <, <= work differently
Comparisions convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false
*/

// undefined will always give you false

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// strict check ===

console.log( "2" == "2a"); // will check only the value
console.log( "2" == 2); // will check only the value
console.log( "2" === 2); // will check the value and datatype as well

