import { Items } from "./checkout";
import { getTaxBandById, getTaxForTaxBand } from "./helperFunctions";
import { calculateDataPerItem } from "./subtotals";

export function calculateTotalTax(items: Items) {
  const itemData = calculateDataPerItem(items);
  const totalTax = Object.values(itemData).reduce(
    (accumulator, currentItem) => {
      return accumulator + currentItem.tax;
    },
    0
  );
  return totalTax;
}

export function calculateTaxPerItem(
  id: string,
  subtotal: number,
  discount: number
) {
  const taxBand = getTaxBandById(id);
  const taxAmount = getTaxForTaxBand(taxBand);
  const discountedSubtotal = subtotal - discount;
  const totalTax = discountedSubtotal * taxAmount;

  return totalTax;
}
