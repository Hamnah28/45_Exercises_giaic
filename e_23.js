"use strict";
/*
Write a series of conditional tests. Print a statement describing each test and your prediction
for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
let car = 'subaru';
let fruit = 'apple';
let number = 10;
let booleanValue = true;
let array = [1, 2, 3];
// Tests that evaluate to True
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // true
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple'); // true
console.log("Is number > 5? I predict True.");
console.log(number > 5); // true
console.log("Is booleanValue == true? I predict True.");
console.log(booleanValue === true); // true
console.log("Does array include 2? I predict True.");
console.log(array.includes(2)); // true
// Tests that evaluate to False
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // false
console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit == 'banana'); // false
console.log("Is number < 5? I predict False.");
console.log(number < 5); // false
console.log("Is booleanValue === false? I predict False.");
console.log(booleanValue === true); // false
console.log("Does array include 5? I predict False.");
console.log(array.includes(5)); // false
