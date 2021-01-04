"use strict";
//////TALLEST MOUNTAIN////////
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    }, {
        name: "Everest",
        height: 29029
    }, {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(mtns) {
    var nameOfTallestMtn = "";
    var heightOfTallestMtn = 0;
    for (var _i = 0, mtns_1 = mtns; _i < mtns_1.length; _i++) {
        var mtn = mtns_1[_i];
        if (mtn.height > heightOfTallestMtn) {
            heightOfTallestMtn = mtn.height;
            nameOfTallestMtn = mtn.name;
        }
    }
    return nameOfTallestMtn;
}
var tallestMtn = findNameOfTallestMountain(mountains);
console.log(tallestMtn);
var products = [
    {
        name: "backpack",
        price: 25
    },
    {
        name: "lunchbox",
        price: 10
    }, {
        name: "binder",
        price: 4
    }
];
function calcAverageProductPrice(products) {
    var prodCount = 0;
    var prodTotal = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var prod = products_1[_i];
        prodTotal += prod.price;
        prodCount++;
    }
    var prodAverage = prodTotal / prodCount;
    return prodAverage;
}
var calcAverage = calcAverageProductPrice(products);
console.log(calcAverage);
var inventory = [
    {
        product: {
            name: 'motor',
            price: 10.00,
        },
        quantity: 10
    },
    {
        product: {
            name: 'sensor',
            price: 12.50,
        },
        quantity: 4
    }, {
        product: {
            name: 'LED',
            price: 1.00,
        },
        quantity: 20
    }
];
function calcInventoryValue(items) {
    var invVal = 0;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        var itemVal = item.product.price * item.quantity;
        invVal += itemVal;
    }
    return invVal;
}
var calcInValue = calcInventoryValue(inventory);
console.log(calcInValue);
