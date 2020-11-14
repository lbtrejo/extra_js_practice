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