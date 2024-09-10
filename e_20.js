"use strict";
/*
Think of something you could store in an array. For example, you could make a list of mountains,
rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list
containing these items.
*/
// List of languages
const languages = ["English", "Spanish", "French", "Mandarin", "Arabic"];
// Print the original list
console.log("Original list of languages:", languages);
// Add a new language to the end of the list
languages.push("German");
console.log("After adding a language:", languages);
// Remove the first language from the list
languages.shift();
console.log("After removing the first language:", languages);
// Insert a language at the beginning of the list
languages.unshift("Japanese");
console.log("After adding a language at the beginning:", languages);
// Sort the list alphabetically
languages.sort();
console.log("Alphabetically sorted list:", languages);
// Reverse the order of the list
languages.reverse();
console.log("Reversed list:", languages);
// Print the number of languages in the list
console.log("Number of languages:", languages.length);
// Print each language in the list with a message
for (let i = 0; i < languages.length; i++) {
    console.log(`I would like to learn ${languages[i]}.`);
}
