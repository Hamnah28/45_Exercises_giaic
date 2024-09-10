/*
You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/

const myFriends: string[] = ["Ali", "Tariq", "Madad", "Ayaz"];
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

// Print all friends along with the invitation message
for (let i = 0; i < myFriends.length; i++) {
    console.log(`Mr. ${myFriends[i]}, you are invited to my dinner`);
}

