import { calculateTotalDiscount } from "./discounts";
import { calculateShippingCost } from "./shipping";
import { calculateSubtotal } from "./subtotals";
import { calculateTotalTax } from "./taxes";

export interface Items {
  [id: string]: number;
}

export function calculateGrossTotal(items: Items) {
  let grossTotal = 0;

  const subtotal = calculateSubtotal(items);
  const discount = calculateTotalDiscount(items);
  const tax = calculateTotalTax(items);

  grossTotal = subtotal - discount + tax;

  return grossTotal;
}

export function calculateNetTotal(items: Items) {
  let netTotal = 0;

  const grossTotal = calculateGrossTotal(items);
  const shipping = calculateShippingCost(items);

  netTotal = grossTotal + shipping;

  return netTotal;
}
