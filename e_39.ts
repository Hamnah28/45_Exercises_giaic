/*
Write a function called city_country() that takes in the name of a city and its country. The
function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least
three city-country pairs, and print the value that’s returned.
*/

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with different city-country pairs
let result1 = city_country('Lahore', 'Pakistan');
let result2 = city_country('New York', 'USA');
let result3 = city_country('Paris', 'France');

// Printing the returned values
console.log(result1); // Output: Lahore, Pakistan
console.log(result2); // Output: New York, USA
console.log(result3); // Output: Paris, France
