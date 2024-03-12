import { productData } from "./utils/productData";
import { discounts } from "./utils/discounts";

interface Items {
  [id: string]: number;
}

//basic quantity function
export function calculateTotalPrice(items: Items) {
  let totalPrice = 0;

  Object.entries(items).forEach(([itemId, quantity]) => {
    const price = getPriceById(itemId);
    const subtotal = price * quantity;
    totalPrice += subtotal;
  });

  return totalPrice;
}

export function calculateSubtotals(items: Items) {
  const subtotals: { [id: string]: { subtotal: number; description: string } } =
    {};

  Object.entries(items).forEach(([id, quantity]) => {
    const product = productData.products.find((product) => product.id === id);
    if (product) {
      const subtotal = getPriceById(id) * quantity;
      subtotals[id] = { subtotal, description: product.description };
    }
  });

  return subtotals;
}

export function calculateDiscounts(items: Items) {
  const subtotals = calculateSubtotals(items);

  // Aggregate totals for each category
  const categoryTotals: { [category: string]: number } = {};
  Object.entries(subtotals).forEach(([id, { subtotal }]) => {
    const category = getCategoryById(id);
    categoryTotals[category] = (categoryTotals[category] || 0) + subtotal;
  });

  // Calculate discounts
  const discounts: { [category: string]: number } = {};
  Object.entries(categoryTotals).forEach(([category, total]) => {
    const discount = getDiscountForCategory(category);
    if (discount) {
      discounts[category] = total * discount;
    }
  });

  return discounts;
}

function getCategoryById(id: string) {
  const product = productData.products.find((product) => product.id === id);
  return product ? product.category : 0;
}

function getDiscountForCategory(category: string) {
  const discount = discounts.discount.find(
    (discount) => discount.category === category.toLowerCase()
  );
  return discount ? discount.discountValue : 0;
}

function getPriceById(id: string) {
  const product = productData.products.find((product) => product.id === id);
  return product ? product.price : 0;
}
