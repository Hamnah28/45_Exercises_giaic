/*
You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal
to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an array.
*/

let car: string = 'subaru';
let fruit: string = 'apple';
let number: number = 10;
let booleanValue: boolean = true;
let array: number[] = [1, 2, 3];
let text: string = 'Hello World';
let fruits: string[] = ['apple', 'banana', 'cherry'];

// Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // true

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // true

console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit == 'banana'); // false

console.log("Is fruit != 'apple'? I predict False.");
console.log(fruit != 'apple'); // false

// Tests using the lower case function
console.log("Is text.toLowerCase() == 'hello world'? I predict True.");
console.log(text.toLowerCase() == 'hello world'); // true

console.log("Is text.toLowerCase() == 'HELLO WORLD'? I predict False.");
console.log(text.toLowerCase() == 'HELLO WORLD'); // false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is number == 10? I predict True.");
console.log(number == 10); // true

console.log("Is number != 5? I predict True.");
console.log(number != 5); // true

console.log("Is number > 5? I predict True.");
console.log(number > 5); // true

console.log("Is number < 15? I predict True.");
console.log(number < 15); // true

console.log("Is number >= 10? I predict True.");
console.log(number >= 10); // true

console.log("Is number <= 10? I predict True.");
console.log(number <= 10); // true

console.log("Is number < 10? I predict False.");
console.log(number < 10); // false

console.log("Is number > 15? I predict False.");
console.log(number > 15); // false

// Tests using "and" and "or" operators
console.log("Is car == 'subaru' && fruit == 'apple'? I predict True.");
console.log(car == 'subaru' && fruit == 'apple'); // true

console.log("Is car == 'subaru' || fruit == 'banana'? I predict True.");
console.log(car == 'subaru' || fruit == 'banana'); // true

console.log("Is car == 'toyota' && fruit == 'apple'? I predict False.");
console.log(car == 'toyota' && fruit == 'apple'); // false

console.log("Is car == 'toyota' || fruit == 'banana'? I predict False.");
console.log(car == 'toyota' || fruit == 'banana'); // false

// Test whether an item is in an array
console.log("Does array include 2? I predict True.");
console.log(array.includes(2)); // true

console.log("Does array include 5? I predict False.");
console.log(array.includes(5)); // false

console.log("Does fruits include 'banana'? I predict True.");
console.log(fruits.includes('banana')); // true

console.log("Does fruits include 'grape'? I predict False.");
console.log(fruits.includes('grape')); // false

// Test whether an item is not in an array
console.log("Does array not include 5? I predict True.");
console.log(!array.includes(5)); // true

console.log("Does array not include 2? I predict False.");
console.log(!array.includes(2)); // false

console.log("Does fruits not include 'grape'? I predict True.");
console.log(!fruits.includes('grape')); // true

console.log("Does fruits not include 'banana'? I predict False.");
console.log(!fruits.includes('banana')); // false
