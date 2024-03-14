"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateShippingCost = void 0;
const checkout_1 = require("../checkout");
const shippingData_1 = require("../utils/shippingData");
function calculateShippingCost(items) {
    const grossTotal = (0, checkout_1.calculateGrossTotal)(items);
    const sortedThresholds = Object.keys(shippingData_1.shippingData)
        .map(Number)
        .sort((a, b) => b - a);
    const threshold = sortedThresholds.find((threshold) => grossTotal >= threshold);
    return threshold !== undefined ? shippingData_1.shippingData[threshold] : 0;
}
exports.calculateShippingCost = calculateShippingCost;
