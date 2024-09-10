/*
Think of at least five places in the world you’d like to visit.
• Store the locations in an array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

// 1. Store the locations in an array
const placesToVisit: string[] = ["Tokyo", "New York", "Paris", "Sydney", "Cape Town"];

// 2. Print the array in its original order
console.log("Original order:", placesToVisit);

// 3. Print the array in alphabetical order without modifying the actual list
const sortedPlaces = [...placesToVisit].sort();
console.log("Alphabetical order:", sortedPlaces);

// 4. Show that the array is still in its original order by printing it
console.log("Original order after sorting:", placesToVisit);

// 5. Print the array in reverse alphabetical order without changing the order of the original list
const reverseSortedPlaces = [...sortedPlaces].reverse();
console.log("Reverse alphabetical order:", reverseSortedPlaces);

// 6. Show that the array is still in its original order by printing it again
console.log("Original order after reverse sorting:", placesToVisit);

// 7. Reverse the order of the list and print it to show that its order has changed
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// 8. Reverse the order of the list again and print it to show it's back to its original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// 9. Sort the array in alphabetical order and print it
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// 10. Sort the array in reverse alphabetical order and print it
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
