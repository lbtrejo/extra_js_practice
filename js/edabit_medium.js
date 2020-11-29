// Create a function which returns the number of true values there are in an array.

const countTrue = (arr) => {
    let count = 0;
    for (let item of arr) {
        if (item === true) {
            count++;
        }
    }
    return count;
}

// Create a function that takes the age and return the age in days.

const calcAge = (age) => {
    return age * 365;
}

// Given a sandwich (as an array), return an array of fillings inside the sandwich. This involves ignoring the first and last elements.

const getFillings = (sandwich) => {
    sandwich.pop();
    sandwich.shift();
    return sandwich;
}

// You are given 2 out of 3 angles in a triangle, in degrees.
// Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.

const missingAngle = (first, second) => {
    let angleSum = 180;
    let third = angleSum - (first + second);
    if (third < 90) {
        return "acute";
    } else if (third = 90) {
        return "right";
    } else {
        return "obtuse";
    }
}

// Create a function that takes an integer n and returns the nth tetrahedral number.

// 1, 1 + (1 + 2), 1 + (1 + 2) + (1 + 2 + 3)
const tetra = (n) => {
    return (n * (n + 1) * (n + 2) / 6);
}


//Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
const perimeter = (l, num) => {
    switch (l) {
        case "s": return num * 4;
        default : return num * 6.28;
    }
}

// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

function matchHouses(step) {
    if (step === 0){
        return 0;
    } else {
        return (5 * step) + 1
    }
}


/*
Create a function that returns true if the first array can be nested inside the second.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.
 */

// function canNest(arr1, arr2) {
//     let la1 = arr1.length;
//     let la2 = arr2.length;
//     return arr1[0] > arr2[0] && arr1[la1 - 1] < arr2[la2 - 1];
// }