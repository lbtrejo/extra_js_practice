"use strict";

//  Sales Tax values
//  10% on all goods minus [books, food, medical products]
//  5% on all imported goods

// Tax rate of n% = (n * price) / 100 [ROUNDED UP TO NEAREST 0.05]
//  (Math.ceil(number*20)/20).toFixed(2)
//   Take your original number, multiply by 20, then round UP to the next integer value.  Divide the new integer by 20 and you get the original value rounded up to the next .05.

// Input Item object structure:
// Item Types = ["book", "food", "medical", "misc"]

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
    console.log("Name: ", cartObject.itemName);
    let taxRate = calculateSalesTax(cartObject);
    console.log("Tax Rate: ", taxRate);
    let subTotal = cartObject.itemPrice * cartObject.itemAmount;
    console.log("Subtotal: ", subTotal);
    // Need an if statement here to calculate sales tax if applicable
    if (taxRate > 0) {
        let taxedTotal = subTotal + (subTotal * taxRate);
        console.log("Taxed total: ", taxedTotal);
        let roundedTotal = (Math.ceil(taxedTotal * 20) / 20)
        return roundedTotal.toFixed(2)
    }
    return subTotal.toFixed(2);
}

let basket_1 = [];

addItem("book", 12.49, "book", false, 1, basket_1);
addItem("music CD", 14.99, "misc", false, 1, basket_1);
addItem("chocolate bar", .85, "food", false, 1, basket_1);
addItem("imported bottle of perfume", 47.50, "misc", true, 1, basket_1);

console.log(basket_1);

