"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscountPerItem = exports.calculateTotalDiscount = void 0;
const helperFunctions_1 = require("./helperFunctions");
const subtotals_1 = require("./subtotals");
function calculateTotalDiscount(items) {
    const itemData = (0, subtotals_1.calculateDataPerItem)(items);
    const totalDiscount = Object.values(itemData).reduce((accumulator, currentItem) => {
        return accumulator + currentItem.discount;
    }, 0);
    return totalDiscount;
}
exports.calculateTotalDiscount = calculateTotalDiscount;
function calculateDiscountPerItem(id, subtotal) {
    const category = (0, helperFunctions_1.getCategoryById)(id);
    const discount = (0, helperFunctions_1.getDiscountForCategory)(category);
    const totalDiscount = subtotal * discount;
    return totalDiscount;
}
exports.calculateDiscountPerItem = calculateDiscountPerItem;
