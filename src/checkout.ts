import { getPriceById } from "./functions/helperFunctions";

export interface Items {
  [id: string]: number;
}

export function calculateTotalPrice(items: Items) {
  let totalPrice = 0;

  Object.entries(items).forEach(([itemId, quantity]) => {
    const subtotal = getPriceById(itemId) * quantity;
    totalPrice += subtotal;
  });

  return totalPrice;
}
