"use strict";

// 1.  Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to search and the second argument should be the value you want to search for. If the item does not exist in the provided array, return an empty array.
//
//     Given: var fruits = [“apple”, “banana”, “orange”, “apple”, “pineapple”];
// allIndexesOf(fruits, “apple”) should return the array [0, 3]
// allIndexesOf(fruits, “guava”) should return the array []
// allIndexesOf(fruits, “pineapple”) should return [4]
//
//
// 2.  Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
//
// Given:  var bugs = [“mosquito”, “ant”, “scorpion”, “ant”, “ant”, “mosquito”, “typo”, “reference error”, “type error”];
// removeAll(bugs, “ant”) should return [“mosquito”, “scorpion”, “mosquito”, “typo”, “reference error”, “type error”]
// removeAll(bugs, “mosquito”) should return [“ant”, “scorpion”, “ant”, “ant”, “typo”, “reference error”, “type error”]
// removeAll(bugs, “roach”) should return the original array b/c “roach” has no occurrences.
//
// 3.  Make a function called coinFlip() that returns either 0 or 1, randomly

const coinFlip = function(){
    return Math.floor(Math.random() * Math.floor(2));
}

// 4.  Make a function called twoDice() that returns the sum of rolling two six sided dice.
//
//
// 5.  Make a function called twentySidedDie() that returns a random integer between 1 and 20.
//
//
// 6.  Make a function called twelveSidedDie() that returns a random integer between 1 and 12.
//
//
// 7.  Make a function called tetrahedron() that returns a random integer between 1 and 4.
//
//
// 8.  Make a function called rollDie() that returns an integer between 1 and 6.
//
//
// 9.  Make a function called listOfRolls(num) that takes in a number containing how many 6-sided dice rolls you want to make. The listOfRolls function should return an array of that length, where each element of the array is the result of the rollDie function.
//
//
// 10.  Make a function called listOfRollsFromDieFunc(numberOfRolls, diceFunction)
//
//
// 11.  This function should take in two arguments:
//
//     The first argument is the number of rolls you want to make.
//     The second argument is a function that contains the function definition for the type of die you want to roll.
//
//     For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron), then the function will return an array containing one value that is the result of calling the tetrahedron function.
