const colors = ['red', 'green', 'blue'];

// Basic destructuring
const [firstColor, secondColor] = colors;
console.log(firstColor);  // 'red'
console.log(secondColor); // 'green'

// Skipping items
const [,, thirdColor] = colors;
console.log(thirdColor);  // 'blue'

// Default values
const [a = 1, b = 2] = ['x'];
console.log(a, b); // 'x', 2

// Rest pattern
const [head, ...tail] = colors;
console.log(tail); // ['green', 'blue']


// object

const person = {
  name: 'Alice',
  age: 30,
  location: 'Paris'
};

// Basic destructuring
const { name, age } = person;
console.log(name); // 'Alice'
console.log(age);  // 30

// Renaming variables
const { name: personName } = person;
console.log(personName); // 'Alice'

// Default values
const { hobby = 'reading' } = person;
console.log(hobby); // 'reading'

// Nested objects
const user = {
  id: 1,
  profile: {
    email: 'test@example.com'
  }
};
const { profile: { email } } = user;
console.log(email); // 'test@example.com'