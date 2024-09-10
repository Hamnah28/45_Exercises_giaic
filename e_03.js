"use strict";
/*
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,and titlecase.
*/
const personName = "Hamnah";
//lowercase
console.log(personName.toLowerCase());
//uppercase
console.log(personName.toUpperCase());
//titlecase
let firstLetter = personName.charAt(0).toUpperCase();
let restLetters = personName.slice(1).toLowerCase();
let titlecase = firstLetter + restLetters;
console.log(titlecase);
