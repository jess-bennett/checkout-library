import { productData } from "./utils/productData";
import { BasketItem } from "./utils/types";

//basic quantity function
export function totalPrice(items: BasketItem[]) {
  let totalPrice = 0;

  items.forEach((item: BasketItem) => {
    const price = getPriceById(item.id);

    const subtotal = price * item.quantity;

    totalPrice += subtotal;
  });

  return totalPrice;
}

function getPriceById(id: string) {
  const product = productData.products.find((product) => product.id === id);
  return product ? product.price : 0;
}
