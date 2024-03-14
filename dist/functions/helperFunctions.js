"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPriceById = exports.getDiscountForCategory = exports.getTaxForTaxBand = exports.getTaxBandById = exports.getCategoryById = void 0;
const productData_1 = require("../utils/productData");
const discountData_1 = require("../utils/discountData");
const taxBandData_1 = require("../utils/taxBandData");
function getCategoryById(id) {
    const product = productData_1.productData.products.find((product) => product.id === id);
    return product ? product.category : null;
}
exports.getCategoryById = getCategoryById;
function getTaxBandById(id) {
    const product = productData_1.productData.products.find((product) => product.id === id);
    return product ? product.taxBand : null;
}
exports.getTaxBandById = getTaxBandById;
function getTaxForTaxBand(taxBand) {
    const tax = taxBandData_1.taxData.taxes.find((tax) => tax.taxBand === taxBand.toLowerCase());
    return tax ? tax.taxAmount : 0;
}
exports.getTaxForTaxBand = getTaxForTaxBand;
function getDiscountForCategory(category) {
    const discount = discountData_1.discountData.discounts.find((discount) => discount.category === category.toLowerCase());
    return discount ? discount.discountValue : 0;
}
exports.getDiscountForCategory = getDiscountForCategory;
function getPriceById(id) {
    const product = productData_1.productData.products.find((product) => product.id === id);
    return product ? product.price : 0;
}
exports.getPriceById = getPriceById;
