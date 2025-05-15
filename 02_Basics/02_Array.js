const marvel_heros = ['thor', 'Ironman', 'spiderman']
const dc_heros = ['Batman', 'superman', 'flash']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][2]);

// concat returns new array.
const new_heros = marvel_heros.concat(dc_heros)
// console.log(new_heros);

// Spread operator not limited to one array we can added multiple.

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5], [6, [7, 8]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// While doing datascraping/conversion

// console.log(Array.isArray("hitesh"));
// console.log(Array.from("hitesh")); // converts to array

// Intresting case
// How to make an array with keys are values??
// console.log(Array.from({name : "hitesh"})); // Gives empty array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



