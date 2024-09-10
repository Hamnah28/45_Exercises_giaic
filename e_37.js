/*
Modify the make_shirt() function so that shirts are large by default, with a message that reads
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any
size with a different message.
*/
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size, " and the message on it says: \"").concat(message, "\"."));
}
// Make a large shirt with default message
make_shirt();
// Make a medium shirt with default message
make_shirt('Medium');
// Make a small shirt with a custom message
make_shirt('Small', 'Hello, JavaScript!');
