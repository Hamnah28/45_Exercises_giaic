/*
Start with your work from Exercise 40. Call the function make_great() with a copy of the array
of magicians’ names. Because the original array will be unchanged, return the new array and store it
in a separate array. Call show_magicians() with each array to show that you have one array of the
original names and one array with the Great added to each magician’s name.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to show magicians
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Function to make magicians great
function makeGreat(magicians) {
    return magicians.map(function (magician) { return magician + ' the Great'; });
}
// Array of magician's names
var originalMagicians = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Make a copy of the original array
var greatMagicians = makeGreat(__spreadArray([], originalMagicians, true));
// Show the original array
console.log("Original Magicians:");
showMagicians(originalMagicians);
// Show the modified array
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
