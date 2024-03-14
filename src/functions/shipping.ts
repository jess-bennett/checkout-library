import { Items, calculateGrossTotal } from "./checkout";
import { shippingData } from "../utils/shippingData";

export function calculateShippingCost(items: Items) {
  const grossTotal = calculateGrossTotal(items);
  const sortedThresholds = Object.keys(shippingData)
    .map(Number)
    .sort((a, b) => b - a);

  const threshold = sortedThresholds.find(
    (threshold) => grossTotal >= threshold
  );

  return threshold !== undefined ? shippingData[threshold] : 0;
}
