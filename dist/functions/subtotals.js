"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSubtotal = exports.calculateDataPerItem = void 0;
const productData_1 = require("../utils/productData");
const discounts_1 = require("./discounts");
const helperFunctions_1 = require("./helperFunctions");
const taxes_1 = require("./taxes");
function calculateDataPerItem(items) {
    const subtotals = {};
    Object.entries(items).forEach(([id, quantity]) => {
        const product = productData_1.productData.products.find((product) => product.id === id);
        if (product) {
            const subtotal = (0, helperFunctions_1.getPriceById)(id) * quantity;
            const discount = (0, discounts_1.calculateDiscountPerItem)(id, subtotal);
            const tax = (0, taxes_1.calculateTaxPerItem)(id, subtotal, discount);
            subtotals[id] = {
                description: product.description,
                quantity,
                subtotal,
                discount,
                tax,
            };
        }
    });
    return subtotals;
}
exports.calculateDataPerItem = calculateDataPerItem;
function calculateSubtotal(items) {
    const itemData = calculateDataPerItem(items);
    const totalSubtotal = Object.values(itemData).reduce((accumulator, currentItem) => {
        return accumulator + currentItem.subtotal;
    }, 0);
    return totalSubtotal;
}
exports.calculateSubtotal = calculateSubtotal;
