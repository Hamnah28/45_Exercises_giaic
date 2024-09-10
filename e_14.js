"use strict";
/*
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
// const myFriends = ["Ali", "Ahmed", "Hussain", "Tariq", "Madad", "Ayaz"];
// 1st method with loop
// for (let i = 0; i < myFriends.length; i++) {
// console.log(`Mr. ${myFriends[i]}! You are invited to my dinner on Monday\n`);
// }
// 2nd method 
const myFriends = ["Ali", "Ahmed", "Hussain", "Tariq", "Madad", "Ayaz"];
myFriends.map((ib) => {
    console.log(`Mr. ${ib}! You are invited to my dinner on Monday\n`);
});
