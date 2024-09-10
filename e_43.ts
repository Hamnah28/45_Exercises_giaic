/*
Start with your work from Exercise 40. Call the function make_great() with a copy of the array
of magicians’ names. Because the original array will be unchanged, return the new array and store it
in a separate array. Call show_magicians() with each array to show that you have one array of the
original names and one array with the Great added to each magician’s name.
*/

// Function to show magicians
function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Function to make magicians great
function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => magician + ' the Great');
}

// Array of magician's names
let originalMagicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Make a copy of the original array
let greatMagicians: string[] = makeGreat([...originalMagicians]);

// Show the original array
console.log("Original Magicians:");
showMagicians(originalMagicians);

// Show the modified array
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
