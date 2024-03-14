"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTaxPerItem = exports.calculateTotalTax = void 0;
const helperFunctions_1 = require("./helperFunctions");
const subtotals_1 = require("./subtotals");
function calculateTotalTax(items) {
    const itemData = (0, subtotals_1.calculateDataPerItem)(items);
    const totalTax = Object.values(itemData).reduce((accumulator, currentItem) => {
        return accumulator + currentItem.tax;
    }, 0);
    return totalTax;
}
exports.calculateTotalTax = calculateTotalTax;
function calculateTaxPerItem(id, subtotal, discount) {
    const taxBand = (0, helperFunctions_1.getTaxBandById)(id);
    const taxAmount = (0, helperFunctions_1.getTaxForTaxBand)(taxBand);
    const discountedSubtotal = subtotal - discount;
    const totalTax = discountedSubtotal * taxAmount;
    return totalTax;
}
exports.calculateTaxPerItem = calculateTaxPerItem;
