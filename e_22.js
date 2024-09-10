"use strict";
/*
If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error. Make sure you correct the error
before closing the program.
*/
// Create a resort day object using the defined interface
const myDayAtResort = {
    date: "2024-07-13",
    weather: "Sunny",
    activities: ["Swimming", "Hiking", "Spa", "Dining at a seaside restaurant"],
    meals: {
        breakfast: "Pancakes and fresh fruit",
        lunch: "Grilled fish and salad",
        dinner: "Steak and mashed potatoes"
    }
};
// Print the resort day object
console.log("Day at the Resort:", myDayAtResort);
// Access and print individual properties of the resort day object
console.log(`Date: ${myDayAtResort.date}`);
console.log(`Weather: ${myDayAtResort.weather}`);
console.log(`Activities: ${myDayAtResort.activities.join(", ")}`);
console.log(`Breakfast: ${myDayAtResort.meals.breakfast}`);
console.log(`Lunch: ${myDayAtResort.meals.lunch}`);
console.log(`Dinner: ${myDayAtResort.meals.dinner}`);
// Intentionally produce an index error by accessing an out-of-bounds index
console.log(`Invalid Activity: ${myDayAtResort.activities[10]}`); // This line will produce an error
// Add a new activity to the activities array
myDayAtResort.activities.push("Evening beach walk");
console.log("Updated activities:", myDayAtResort.activities);
// Update the weather
myDayAtResort.weather = "Partly Cloudy";
console.log("Updated weather:", myDayAtResort.weather);
// Print the updated resort day object
console.log("Updated Day at the Resort:", myDayAtResort);
