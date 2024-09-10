"use strict";
/*
Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
// const myTrans = ["Car", "Bike", "Bus", "Train", "Aeroplane"];
// 1st method (loop)
// for (let i = 0; i < myTrans.length; i++) {
//  console.log(`I would like to own a ${myTrans[i]}`);
// }
// 2nd method 
const myTrans = ["Car", "Bike", "Bus", "Train", "Aeroplane"];
myTrans.map((ib) => {
    console.log(`I would like to own a ${ib}`);
});
