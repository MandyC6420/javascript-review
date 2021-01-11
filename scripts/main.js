console.log("Welcome to the main module")

let myFavoriteSandwich = "Turkey Club no Mayo";

let leastFavoriteSandwich = {
    sandwichName: "Pimento spread",
    price: 4.99,
    ingredients: ['pimento cheese spread', 'lettuce', 'tomato']
};

let newSandwich = "BLT"

let menu = [
    
    {
        sandwichName: "Turkey Club no mayo",
        price: 5.99,
        ingredients: ['turkey', 'bacon', 'tomato', 'lettuce']
    },
    
    {
        sandwichName: "Pimento Spread",
        price: 4.99,
        ingredients: ['pimento cheese spread', 'lettuce', 'tomato']
    },
    
    {
        sandwichName: "BLT",
        price: 6.99,
        ingredients: ['bacon', 'tomato', 'lettuce']
    }

];
console.log(menu[2].ingredients[0])


