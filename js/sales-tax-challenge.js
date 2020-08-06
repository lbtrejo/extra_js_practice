"use strict";

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
    let taxRate = 0;
    if (cartObject.itemType === "misc") {
        taxRate += .1;
    }
    if (cartObject.itemImported === true) {
        taxRate += .05;
    }
    return taxRate.toFixed(2);
}

function calculateSalesTaxAmount(cartObject) {
    let taxRate = parseFloat(calculateSalesTax(cartObject));
    let subTotal = cartObject.itemPrice * cartObject.itemAmount;
    // Calculate sales tax if applicable
    if (taxRate > 0) {
        let salesTax = (subTotal * taxRate);
        let roundedTax = (Math.ceil(salesTax * 20) / 20)
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
        finalSubtotal += parseFloat(objectPrices[0]);
        finalSalesTax += parseFloat(objectPrices[1]);
    });
    console.log("Sales Taxes: " + finalSalesTax.toFixed(2));
    console.log("Total: " + (finalSubtotal + finalSalesTax).toFixed(2));
}


let basket_1 = [], basket_2 = [], basket_3 = [];

addItem("book", 12.49, "book", false, 1, basket_1);
addItem("music CD", 14.99, "misc", false, 1, basket_1);
addItem("chocolate bar", .85, "food", false, 1, basket_1);

addItem("imported box of chocolates", 10.00, "food", true, 1, basket_2);
addItem("imported bottle of perfume", 47.50, "misc", true, 1, basket_2);

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