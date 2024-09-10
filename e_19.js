"use strict";
/*
Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
*/
// Initial list of friends
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
// Print the number of people being invited to dinner
console.log(`Number of people invited to dinner: ${myFriends.length}`);
// Remove the last two names
myFriends.pop();
myFriends.pop();
// Print the final state of the list to ensure it's empty
console.log(myFriends);
