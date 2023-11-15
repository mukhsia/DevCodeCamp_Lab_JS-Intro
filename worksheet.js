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

