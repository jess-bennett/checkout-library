import { Items } from "../checkout";
export declare function calculateTotalTax(items: Items): number;
export declare function calculateTaxPerItem(id: string, subtotal: number, discount: number): number;
