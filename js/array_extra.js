"use strict";

// 1.  Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to search and the second argument should be the value you want to search for. If the item does not exist in the provided array, return an empty array.
//
//     Given: var fruits = [“apple”, “banana”, “orange”, “apple”, “pineapple”];
// allIndexesOf(fruits, “apple”) should return the array [0, 3]
// allIndexesOf(fruits, “guava”) should return the array []
// allIndexesOf(fruits, “pineapple”) should return [4]

var fruits = ["apple", "banana", "orange", "apple", "pineapple"];

function allIndexesOf (arrayName, value) {
    var output = [];
    arrayName.forEach(function(element, index) {
        // console.log("element: ", element);
        // console.log("value: ", value);
        if (element === value) {
            output.push(index);
        }
    })
    console.log(output);
}
allIndexesOf(fruits, "apple");
allIndexesOf(fruits, "guava");
allIndexesOf(fruits, "pineapple");


// 2.  Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
//
// Given:  var bugs = [“mosquito”, “ant”, “scorpion”, “ant”, “ant”, “mosquito”, “typo”, “reference error”, “type error”];
// removeAll(bugs, “ant”) should return [“mosquito”, “scorpion”, “mosquito”, “typo”, “reference error”, “type error”]
// removeAll(bugs, “mosquito”) should return [“ant”, “scorpion”, “ant”, “ant”, “typo”, “reference error”, “type error”]
// removeAll(bugs, “roach”) should return the original array b/c “roach” has no occurrences.
//

var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

function removeAll(arrayName, value) {
    var output = [];
    arrayName.forEach(function(element) {
        if (element !== value) {
            output.push(element);
        }
    })
    console.log(output);
};

removeAll(bugs, "ant");
removeAll(bugs, "mosquito");
removeAll(bugs, "roach");


// 3.  Make a function called coinFlip() that returns either 0 or 1, randomly

const coinFlip = function(){
    return Math.floor(Math.random() * Math.floor(2));
}


// 4.  Make a function called twoDice() that returns the sum of rolling two six sided dice.

const twoDice = function(){
    let firstDie = Math.floor(Math.random() * Math.floor(6) + 1);
    console.log("First die roll: " + firstDie);
    let secondDie = Math.floor(Math.random() * Math.floor(6) + 1);
    console.log("Second die roll: " + secondDie);
    return console.log("The sum of both rolls is: " + (firstDie + secondDie).toString() + ".")
}


// 5.  Make a function called twentySidedDie() that returns a random integer between 1 and 20.

const twentySidedDie = function(){
    return Math.floor(Math.random() * Math.floor(20) + 1);
}


// 6.  Make a function called twelveSidedDie() that returns a random integer between 1 and 12.

const twelveSidedDie = function(){
    return Math.floor(Math.random() * Math.floor(12) + 1);
}


// 7.  Make a function called tetrahedron() that returns a random integer between 1 and 4.

const tetrahedron = function(){
    return Math.floor(Math.random() * Math.floor(4) + 1);
}


// 8.  Make a function called rollDie() that returns an integer between 1 and 6.

const rollDie = function(){
    return Math.floor(Math.random() * Math.floor(6) + 1);
        // console.log("Dice roll: " + dieRoll);
}


// 9.  Make a function called listOfRolls(num) that takes in a number containing how many 6-sided dice rolls you want to make. The listOfRolls function should return an array of that length, where each element of the array is the result of the rollDie function.

function listOfRolls(rolls){
    let result = [];
    for (let i = 1; i <= rolls ; i++) {
        result.push(rollDie());
    }
    return console.log(result);
}


// 10.  Make a function called listOfRollsFromDieFunc(numberOfRolls, diceFunction)
//      This function should take in two arguments:
//
//     The first argument is the number of rolls you want to make.
//     The second argument is a function that contains the function definition for the type of die you want to roll.
//
//     For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron), then the function will return an array containing one value that is the result of calling the tetrahedron function.

function listOfRollsSelect(rolls, selection) {
    let result = [];
    for (let i = 1; i <= rolls ; i++) {
        result.push(selection());
    }
    return result;

}

function listOfRollsFromDieFunc(numberOfRolls, diceFunction) {
    let output = [];
    output.push(listOfRollsSelect(numberOfRolls, diceFunction));
    console.log(output);
}