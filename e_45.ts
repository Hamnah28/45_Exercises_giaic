/*
Write a function that stores information about a car in an Object. The function should always
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword
arguments. Call the function with the required information and two other name-value pairs, such as
a color or an optional feature. Print the Object that’s returned to make sure all the information was
stored correctly.
*/

// Function to store car information
function storeCarInfo(manufacturer: string, model: string, ...options: [string, any][]): Record<string, any> {
    let carInfo: Record<string, any> = {
        manufacturer: manufacturer,
        model: model
    };

    options.forEach(option => {
        let [key, value] = option;
        carInfo[key] = value;
    });

    return carInfo;
}

// Call the function with required information and additional name-value pairs
let car1 = storeCarInfo('Toyota', 'Corolla', ['color', 'blue'], ['sunroof', true]);
let car2 = storeCarInfo('Tesla', 'Model S', ['color', 'red'], ['autopilot', true]);

// Print the objects to ensure the information is stored correctly
console.log(car1);
console.log(car2);
