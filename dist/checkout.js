"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateGrossTotal = void 0;
const discounts_1 = require("./functions/discounts");
const subtotals_1 = require("./functions/subtotals");
const taxes_1 = require("./functions/taxes");
function calculateGrossTotal(items) {
    let grossTotal = 0;
    const subtotal = (0, subtotals_1.calculateSubtotal)(items);
    const discount = (0, discounts_1.calculateTotalDiscount)(items);
    const tax = (0, taxes_1.calculateTotalTax)(items);
    grossTotal = subtotal - discount + tax;
    return grossTotal;
}
exports.calculateGrossTotal = calculateGrossTotal;
