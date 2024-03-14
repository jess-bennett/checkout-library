import { Items } from "../checkout";
export declare function calculateDataPerItem(items: Items): {
    [id: string]: {
        description: string;
        quantity: number;
        subtotal: number;
        discount: number;
        tax: number;
    };
};
export declare function calculateSubtotal(items: Items): number;
