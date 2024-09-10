"use strict";
/*
You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
let myFriends = ["Ali", "Tariq", "Madad", "Ayaz"];
console.log(myFriends);
console.log('We have 3 more friends to invite to dinner\n');
// Adding three more friends
// Add at the beginning
myFriends.unshift("Ahmed");
console.log(myFriends);
// Add in the middle (at index 2)
myFriends.splice(2, 0, "Hussain");
console.log(myFriends);
// Add at the end
myFriends.push("Kashif");
console.log(myFriends);
// Print a message saying that only two people can be invited
console.log("Sorry, but I can invite only two people for dinner.");
// Remove guests until only two remain
while (myFriends.length > 2) {
    let removedFriend = myFriends.pop();
    console.log(`Sorry ${removedFriend}, I can't invite you to dinner.`);
}
// Print a message to the remaining two people
for (let i = 0; i < myFriends.length; i++) {
    console.log(`Mr. ${myFriends[i]}, you are still invited to my dinner.`);
}
// Remove the last two names
myFriends.pop();
myFriends.pop();
// Print the final state of the list to ensure it's empty
console.log(myFriends);
