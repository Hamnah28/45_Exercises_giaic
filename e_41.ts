/*
Make an array of magician’s names. Pass the array to a function called show_magicians(), which
prints the name of each magician in the array.
*/

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Array of magician's names
let magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Calling the function to show magicians
show_magicians(magicians);
