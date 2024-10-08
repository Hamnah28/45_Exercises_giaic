/*
Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var userNames = ['admin', 'Eric', 'John', 'Alice', 'Jane'];
// Check if the array is empty
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
        var username = userNames_1[_i];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// Clearing the array to simulate an empty list
usernames = [];
// Check again if the array is empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
