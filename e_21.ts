/*
. They think of something you could store in a TypeScript Object. Write a program that creates
Objects containing these items.
*/

// Define an interface for the person object
interface Person {
    name: string;
    age: number;
    occupation: string;
    languages: string[];
}

// Create a person object using the defined interface
const person: Person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer",
    languages: ["English", "Spanish", "French"]
};

// Print the person object
console.log("Person object:", person);

// Access and print individual properties of the person object
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
console.log(`Occupation: ${person.occupation}`);
console.log(`Languages: ${person.languages.join(", ")}`);

// Add a new language to the languages array
person.languages.push("Mandarin");
console.log("Updated languages:", person.languages);

// Update the occupation
person.occupation = "Senior Software Developer";
console.log("Updated occupation:", person.occupation);

// Print the updated person object
console.log("Updated person object:", person);
