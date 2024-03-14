import {
  calculateDiscountPerItem,
  calculateTotalDiscount,
} from "../src/functions/discounts";

describe("Total discount", () => {
  it("should calculate discount for items with a valid category and discount", () => {
    const items = {
      ["UC1233"]: 5,
      ["UC1234"]: 2,
    };
    const expectedDiscount = 3.0;
    const actualDiscount = calculateTotalDiscount(items);
    expect(actualDiscount).toBe(expectedDiscount);
  });
  it("should return zero for items with an invalid category", () => {
    const items = {
      ["InvalidID"]: 5,
      ["AnotherInvalidID"]: 2,
    };
    const expectedDiscount = 0;
    const actualDiscount = calculateTotalDiscount(items);
    expect(actualDiscount).toBe(expectedDiscount);
  });
  it("should return zero for items with no discount", () => {
    const items = {
      ["UC1231"]: 5,
      ["UC1232"]: 2,
    };
    const expectedDiscount = 0;
    const actualDiscount = calculateTotalDiscount(items);
    expect(actualDiscount).toBe(expectedDiscount);
  });
});

describe("Discount per item", () => {
  it("should calculate discount for an item with a valid category and discount", () => {
    const id = "UC1233";
    const subtotal = 16;
    const expectedDiscount = 0.8;
    const actualDiscount = calculateDiscountPerItem(id, subtotal);
    expect(actualDiscount).toBe(expectedDiscount);
  });
  it("should return zero for an item with an invalid category", () => {
    const id = "InvalidID";
    const subtotal = 100;
    const expectedDiscount = 0;
    const actualDiscount = calculateDiscountPerItem(id, subtotal);
    expect(actualDiscount).toBe(expectedDiscount);
  });
  it("should return zero for an item with no discount", () => {
    const id = "UC1231";
    const subtotal = 80;
    const expectedDiscount = 0;
    const actualDiscount = calculateDiscountPerItem(id, subtotal);
    expect(actualDiscount).toBe(expectedDiscount);
  });
  it("should return zero for an item with zero subtotal", () => {
    const id = "UC1233";
    const subtotal = 0;
    const expectedDiscount = 0;
    const actualDiscount = calculateDiscountPerItem(id, subtotal);
    expect(actualDiscount).toBe(expectedDiscount);
  });
  it("should return zero for an item with negative subtotal", () => {
    const id = "UC1233";
    const subtotal = -20;
    const expectedDiscount = 0;
    const actualDiscount = calculateDiscountPerItem(id, subtotal);
    expect(actualDiscount).toBe(expectedDiscount);
  });
  it("should calculate discount for an item with decimal subtotal", () => {
    const id = "UC1233";
    const subtotal = 33.33;
    const expectedDiscount = 1.6665;
    const actualDiscount = calculateDiscountPerItem(id, subtotal);
    expect(actualDiscount).toBe(expectedDiscount);
  });
});
