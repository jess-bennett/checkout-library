import { productData } from "../utils/productData";
import { discountData } from "../utils/discountData";
import { taxData } from "../utils/taxBandData";

export function getCategoryById(id: string) {
  const product = productData.products.find((product) => product.id === id);

  return product ? product.category : null;
}

export function getTaxBandById(id: string) {
  const product = productData.products.find((product) => product.id === id);

  return product ? product.taxBand : null;
}

export function getTaxForTaxBand(taxBand: string) {
  const tax = taxData.taxes.find(
    (tax) => tax.taxBand === taxBand.toLowerCase()
  );

  return tax ? tax.taxAmount : 0;
}

export function getDiscountForCategory(category: string) {
  const discount = discountData.discounts.find(
    (discount) => discount.category === category.toLowerCase()
  );

  return discount ? discount.discountValue : 0;
}

export function getPriceById(id: string) {
  const product = productData.products.find((product) => product.id === id);

  return product ? product.price : 0;
}
