import { Items } from "./checkout";
import { productData } from "../utils/productData";
import { calculateDiscountPerItem } from "./discounts";
import { getPriceById, getTaxBandById } from "./helperFunctions";
import { calculateTaxPerItem } from "./taxes";

export function calculateDataPerItem(items: Items) {
  const itemData: {
    [id: string]: {
      description: string;
      quantity: number;
      subtotal: number;
      discount: number;
      tax: number;
    };
  } = {};

  Object.entries(items).forEach(([id, quantity]) => {
    const product = productData.products.find((product) => product.id === id);
    if (product) {
      const subtotal = getPriceById(id) * quantity;
      const discount = calculateDiscountPerItem(id, subtotal);
      const tax = calculateTaxPerItem(id, subtotal, discount);
      itemData[id] = {
        description: product.description,
        quantity,
        subtotal,
        discount,
        tax,
      };
    }
  });

  return itemData;
}

export function calculateSubtotal(items: Items) {
  const itemData = calculateDataPerItem(items);
  const totalSubtotal = Object.values(itemData).reduce(
    (accumulator, currentItem) => {
      return accumulator + currentItem.subtotal;
    },
    0
  );
  return totalSubtotal;
}
