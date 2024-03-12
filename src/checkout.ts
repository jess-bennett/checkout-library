import { productData } from "./utils/productData";
import { BasketItem } from "./utils/types";

//basic quantity function
export function totalPrice(items: Record<string, number>) {
  let totalPrice = 0;

  Object.entries(items).forEach(([id, quantity]) => {
    const price = getPriceById(id);
    const subtotal = price * quantity;
    totalPrice += subtotal;
  });

  return totalPrice;
}

function getPriceById(id: string) {
  const product = productData.products.find((product) => product.id === id);
  return product ? product.price : 0;
}
