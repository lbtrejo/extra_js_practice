/**
 * JS Array Practice
 * Intermediate Array practice: array creation, iteration, and manipulation
 */

let pets = ["istanbul", "toby", "millie", "ranger", "trooper", "papa", "leo", "boris", "ranger", "toby", "toby", "boris"];
let evens = [2, 4, 6, 8];
let odds = [1, 3, 5, 7, 9];

// Exercise 0. Write a function named first() that returns only the first element of an array

function first(array){
    return array[0];
}


// Exercise 1. Write a function named secondToLast() that returns the second to last element

function secondToLast(array){
    return array[array.length - 2];
}


// Exercise 2. Write a function named rest() that takes an an array and returns an array containing everything except the first element.

function rest(array){
    array.shift()
    return array;
}


// Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array

function getLongestString(array){
    let longest = array[0];
    array.forEach(function(item){
        if (longest.length < item.length){
            longest = item;
        }
    });
    return longest;
}

// Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.

function getShortestString(array){
    let shortest = array[0];
    array.forEach(function(item){
        if (shortest.length > item.length){
            shortest = item;
        }
    });
    return shortest;
}

// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
// Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]

function addTwoArrays(firstArray, secondArray){
    return firstArray.concat(secondArray);
}

// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// Example: getUniqueValues([“a”, “b”, “a”, “b”, “c”, “c”]) should return [“a”, “b”, “c”]

function getUniqueValues(arr){
    return Array.from(new Set(arr))
}


// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.

function reverseArray(arr){
    return arr.reverse();
}


// Exercies 7. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array’s length minus 1
//   use the randomly generated number as your index
//   return a random quote.

let quotes = ["America, F@#$ yeah!", "Peace sells, but who's buying?", "More cowbell!", "Be excellent to each other", "Party hard!"];

function getRandomQuote(arr){
    return (arr[Math.floor(Math.random() * (5))]);
}


// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
// Example: getIndexesOf(“a”, “banana”) should return the array [1, 3, 5]
// Example: getIndexesOf(“z”, “banana”) should return an empty array [] since there are no “z” characters in “banana”

function getIndexesOf(character, string){
    let splitString = string.split("");
    let result = [];
        splitString.forEach(function(element, index){
        if (character === element){
            result.push(index);
        }
    })
    return result;
}


// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
// Example: removeAll([1, 2, 3], 2) should return [1, 3]
// Example 2: removeAll([2, 2, 3, 4, 5, 2, 2], 2) should return [3, 4, 5]

function removeAll(arr, value){
    let result = [];
    arr.forEach(function(element){
        if (element !== value){
            result.push(element);
        }
    })
    return result;
}


// Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers



// Exercise 11. Write a function named getNFibonacci(n) that returns an array containing the first n fibonacci numbers



// Exercise 12. Write a function named moveFirstToLast() that takes in an array
// the function should return the array with the first element at the end
// Example: moveFirstToLast([1, 2, 3, 4]) should return [2, 3, 4, 1]
// Exercise 13. Write a function named zip() that takes in two arrays with the same number of elements
// Zip returns a new array of arrays where each element is an array of the two elements at the same index
// Example: zip([1, 2, 3], [4, 5, 6]) returns [[1, 4], [2, 5], [3, 6])
// Example: zip([“a”, “b”, “c”], [“x”, “y”, “z”]) returns [[“a”, “x”], [“b”, “y”], [“c”, “z”]]