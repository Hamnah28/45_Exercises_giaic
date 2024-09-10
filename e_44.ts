/*
Write a function that accepts an array of items a person wants on a sandwich. The function
should have one parameter that collects as many items as the function call provides, and it should
print a summary of the sandwich that is being ordered. Call the function three times, using a different
number of arguments each time.
*/

// Function to print a summary of the sandwich
function makeSandwich(...items: string[]): void {
    console.log("You have ordered a sandwich with the following items:");
    items.forEach(item => {
        console.log(`- ${item}`);
    });
    console.log("\n");
}

// Call the function three times with different numbers of arguments
makeSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
makeSandwich('Turkey', 'Bacon', 'Avocado');
makeSandwich('Peanut Butter', 'Jelly');
