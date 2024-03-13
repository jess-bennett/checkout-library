import { Items } from "../checkout";
import { productData } from "../utils/productData";
import { calculateDiscountPerItem } from "./discounts";
import { getPriceById, getTaxBandById } from "./helperFunctions";
import { calculateTaxPerItem } from "./taxes";

export function calculateDataPerItem(items: Items) {
  const subtotals: {
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
      subtotals[id] = {
        description: product.description,
        quantity,
        subtotal,
        discount,
        tax,
      };
    }
  });
  console.log(subtotals);
  return subtotals;
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

// export function calculateCategoryTotals(items: Items) {
//   const subtotals = calculateDataPerItem(items);
//   const categoryTotals: { [category: string]: number } = {};
//   Object.entries(subtotals).forEach(([id, { subtotal }]) => {
//     const category = getCategoryById(id);
//     categoryTotals[category] = (categoryTotals[category] || 0) + subtotal;
//   });

//   return categoryTotals;
// }

export function calculateTaxBandTotals(items: Items) {
  const subtotals = calculateDataPerItem(items);
  const taxBandTotals: { [taxBand: string]: number } = {};
  Object.entries(subtotals).forEach(([id, { subtotal }]) => {
    const taxBand = getTaxBandById(id);
    taxBandTotals[taxBand] = (taxBandTotals[taxBand] || 0) + subtotal;
  });

  return taxBandTotals;
}
