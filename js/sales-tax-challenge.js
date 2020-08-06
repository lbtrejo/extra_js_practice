"use strict";

//  Sales Tax values
//  10% on all goods minus [books, food, medical products]
//  5% on all imported goods

// Tax rate of n% = (n * price) / 100 [ROUNDED UP TO NEAREST 0.05]
//  (Math.ceil(number*20)/20).toFixed(2)
//   Take your original number, multiply by 20, then round UP to the next integer value.  Divide the new integer by 20 and you get the original value rounded up to the next .05.

// Input Item object structure:
// Item Types = ["book", "food", "medical", "misc"]

// Items to return:
// 1. each Items subtotal
// 2. the total sales tax, rounded up to the nearest .05
// 3. the final price of the

function addItem(name, price, type, imported, amount, cartArray){
    let item = {
        itemName: name,
        itemPrice: price,
        itemType: type,
        itemImported: imported,
        itemAmount: amount
    }
    cartArray.push(item);
}

function calculateSalesTax(cartObject) {
    // console.log(cartObject.itemName);
    let taxRate = 0;
    if (cartObject.itemType === "misc") {
        taxRate += .1;
    }
    if (cartObject.itemImported === true) {
        taxRate += .05;
    }
    // console.log(taxRate);
    return taxRate.toFixed(2);
}

function calculateSalesTaxAmount(cartObject) {
    // console.log("Name: ", cartObject.itemName);
    let taxRate = parseFloat(calculateSalesTax(cartObject));
    // console.log("Tax Rate: ", taxRate);
    let subTotal = cartObject.itemPrice * cartObject.itemAmount;
    // console.log("Subtotal: ", subTotal);
    // Need an if statement here to calculate sales tax if applicable
    if (taxRate > 0) {
        let salesTax = (subTotal * taxRate);
        let roundedTax = (Math.ceil(salesTax * 20) / 20)
        // console.log("Taxed total: ", roundedTax.toFixed(2));
        return [subTotal.toFixed(2), roundedTax.toFixed(2)]
    }
    return [subTotal.toFixed(2), "0.00"];
}

function calculateCartTotal(basket){
    let finalSubtotal = 0;
    let finalSalesTax = 0;
    basket.forEach(function(cartObject){
        var objectPrices = calculateSalesTaxAmount(cartObject);
        console.log(cartObject.itemAmount + " " + cartObject.itemName + ": " + objectPrices[0]);
        // console.log("Sales tax on " + cartObject.itemName + ": " + objectPrices[1]);
        finalSubtotal += parseFloat(objectPrices[0]);
        finalSalesTax += parseFloat(objectPrices[1]);
    });
    // console.log("Subtotal: " + finalSubtotal.toFixed(2));
    console.log("Sales Taxes: " + finalSalesTax.toFixed(2));
    console.log("Total: " + (finalSubtotal + finalSalesTax).toFixed(2));
}



let basket_1 = [];
addItem("book", 12.49, "book", false, 1, basket_1);
addItem("music CD", 14.99, "misc", false, 1, basket_1);
addItem("chocolate bar", .85, "food", false, 1, basket_1);

let basket_2 = [];
addItem("imported box of chocolates", 10.00, "food", true, 1, basket_2);
addItem("imported bottle of perfume", 47.50, "misc", true, 1, basket_2);

let basket_3 = [];
addItem("imported bottle of perfume", 27.99, "misc", true, 1, basket_3);
addItem("bottle of perfume", 18.99, "misc", false, 1, basket_3);
addItem("packet of headache pills", 9.75, "medical", false, 1, basket_3);
addItem("box of imported chocolates", 11.25, "food", true, 1, basket_3);

calculateCartTotal(basket_1);
console.log("==================================================")
calculateCartTotal(basket_2);
console.log("==================================================")
calculateCartTotal(basket_3);
console.log("==================================================")