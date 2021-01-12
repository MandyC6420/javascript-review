console.log("Welcome to the main module")
////ChickenMonkey//
function chickenMonkey() {
    for (let i = 1; i < 101; i++) {
        if (i % 5 === 0 && i % 7 === 0) {
            console.log('ChickenMonkey')
        } else if (i % 5 === 0) {
            console.log('Chicken')
        } else if (i % 7 === 0) {
            console.log('Monkey')
        }
        else {
            console.log(i)
        }
    }
}
chickenMonkey()

//Battle of the Bands
let bandNumber = 0

const takeNumber = function (bandName) {
    // console.log(bandNumber, bandName)
    bandNumber++
    return`${bandNumber}. ${bandName}`
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

//COOKOUT

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

// Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.

for (let i = 0; i < foods.length; i++){
    grill(foods[i]);
}
console.log(cookedFood)