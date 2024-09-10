/*
Start with a copy of your program from Exercise 41. Write a function called make_great() that
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
show_magicians() to see that the list has actually been modified.
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
let magician: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Call makeGreat() to modify magicians array
magician = makeGreat(magician);

// Call showMagicians() to display modified list
showMagicians(magician);
