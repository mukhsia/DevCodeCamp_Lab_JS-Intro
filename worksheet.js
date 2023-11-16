"use strict";

// Variables
// Task 1: Variables
/*
let dayOfWeek = `Monday`;
console.log(dayOfWeek);
dayOfWeek = `Friday`;
console.log(`I can't wait for ${dayOfWeek}`);
*/


// Task 2: User Input
/*
let animalInput = prompt(`What is your favorite animal?`);
let colorInput = prompt(`What is your favorite color?`);
console.log(`I've never seen a ${colorInput} ${animalInput}!`);
*/

// Conditionals
// Fav Breakfast: Protein Shake
// Fav Lunch: Sandwich
// Fav Dinner: Steak

// Task 1: Meals
/*
let timeOfDay = 1300;
let meal;
if (timeOfDay < 1200) {
    meal = `Protein Shake`;
} else if (timeOfDay >= 1200 && timeOfDay < 1700) {
    meal = `Sandwich`;
} else if (timeOfDay >= 1700) {
    meal = `Steak`;
}
console.log(meal);
*/

// Task 2 : Random Number
/*
let rng = (Math.floor(Math.random() * 10)) + 1;
if (rng >= 0 && rng <= 2) {
    console.log(`Beatles`);
} else if (rng >= 3 && rng <= 5) {
    console.log(`Stones`);
} else if (rng >= 6 && rng <= 8) {
    console.log(`Floyd`);
} else if (rng >= 9 && rng <= 10) {
    console.log(`Hendrix`);
}
*/

// Loops
// Task 1
/*
for (let i = 0; i < 7; ++i){
    console.log(`Javascript is cool.`);
}

// Task 2
for (let i = 0; i <= 10; ++i){
    console.log(`${i}`);
}

// Task 3
for (let i = 0; i < 5; ++i){
    console.log(`hello`);
    console.log(`goodbye`);
}
*/

// Functions
// Task 1: Favorite Movie
/*
function printMovieName() {
    let favMovie = `Hot Fuzz`;
    console.log(favMovie);
}
printMovieName();
*/

// Task 2: Favorite Band
/*
function promptFavoriteBand() {
    return prompt(`What is your favorite Band?`);
}
let band = promptFavoriteBand();
console.log(band);

// Task 3: Concert (parameters)
function concertDisplay(musicalAct) {
    let myStreet = prompt(`What street do you live on?`);
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}`)
} 
concertDisplay(band);
*/

// Arrays
// Task 1: Desktop Items
/*
let desktopItems = [`fan`, `lamp`, `monitor`];
console.log(desktopItems[1]);
desktopItems.push(`Infinity Gauntlet`);

for(let item of desktopItems){
    console.log(item);
}
*/

// Bonus Task: Magic Number
let magicNumber = Math.floor(Math.random() * 101);
let guess = 0;

while(guess != magicNumber)
{
    guess = prompt(`Input your guess between 0 and 100.`);

    if (guess == magicNumber) {
        console.log(`Congratulations! ${magicNumber} is the magic Number.`);
    } else if (Math.abs(guess-magicNumber) <= 10) {
        console.log(`Getting warmer!`);
    } else if (guess > magicNumber){
        console.log(`Too high!`);
    } else if (guess < magicNumber) {
        console.log(`Too low!`);
    }
}