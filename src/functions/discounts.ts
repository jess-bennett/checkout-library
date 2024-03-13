import { Items } from "../checkout";
import { getCategoryById, getDiscountForCategory } from "./helperFunctions";
import { calculateDataPerItem } from "./subtotals";

export function calculateTotalDiscount(items: Items) {
  const itemData = calculateDataPerItem(items);
  const totalDiscount = Object.values(itemData).reduce(
    (accumulator, currentItem) => {
      return accumulator + currentItem.discount;
    },
    0
  );
  return totalDiscount;
}

export function calculateDiscountPerItem(id: string, subtotal: number) {
  const category = getCategoryById(id);
  const discount = getDiscountForCategory(category);
  const totalDiscount = subtotal * discount;

  return totalDiscount;
}
