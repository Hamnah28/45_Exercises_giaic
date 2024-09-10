/*
Do the following to create a program that simulates how websites ensure that everyone has a
unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames
are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print
a message that the person will need to enter a new username. If a username has not been used, print
a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be
accepted
*/

let current_users: string[] = ['alice', 'bob', 'charlie', 'david', 'eve'];
let new_users: string[] = ['bob', 'frank', 'EVE', 'grace', 'hannah'];

for (let new_username of new_users) {
    // Convert both usernames to lowercase for case insensitive comparison
    let lowercased_new_username = new_username.toLowerCase();

    // Check if the lowercased username exists in current_users
    if (current_users.includes(lowercased_new_username)) {
        console.log(`Sorry, ${new_username} is already taken. Please enter a new username.`);
    } else {
        console.log(`${new_username} is available.`);
        // Add the new username to current_users list
        current_users.push(lowercased_new_username);
    }
}
