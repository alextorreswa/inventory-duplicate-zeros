const { duplicateZeros } = require("../src/duplicateZeros");

describe("duplicateZeros (in-place)", () => {
  // Normal cases
  test("Example 1: duplicates zeros and shifts correctly", () => {
    const inventory = [4, 0, 1, 3, 0, 2, 5, 0];
    duplicateZeros(inventory);
    expect(inventory).toEqual([4, 0, 0, 1, 3, 0, 0, 2]);
  });

  test("No zeros: array stays the same", () => {
    const inventory = [3, 2, 1];
    duplicateZeros(inventory);
    expect(inventory).toEqual([3, 2, 1]);
  });

  test("Zero in the middle", () => {
    const inventory = [1, 2, 0, 3, 4];
    duplicateZeros(inventory);
    expect(inventory).toEqual([1, 2, 0, 0, 3]);
  });

  // Edge cases
  test("Empty array", () => {
    const inventory = [];
    duplicateZeros(inventory);
    expect(inventory).toEqual([]);
  });

  test("Single element zero", () => {
    const inventory = [0];
    duplicateZeros(inventory);
    expect(inventory).toEqual([0]);
  });

  test("Zero at the end (overflow drop)", () => {
    const inventory = [1, 2, 3, 0];
    duplicateZeros(inventory);
    expect(inventory).toEqual([1, 2, 3, 0]); // duplicated zero would overflow
  });
});
