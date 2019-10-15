const flatArray = require("./index");

describe("Test flatArray funcrtion", () => {
  it("should return an array", () => {
    expect(Array.isArray(flatArray([1, 2]))).toBe(true);
  });
  it("should return an empty array if the argument is undefined", () => {
    expect(flatArray(undefined)).toStrictEqual([]);
  });
  it("should return an empty array if the argument is null", () => {
    expect(flatArray(null)).toStrictEqual([]);
  });
  it("should return an empty array if the argument is a string", () => {
    expect(flatArray("hello")).toStrictEqual([]);
  });
  it("should return a flat array when an array is passed as argument", () => {
    const arr1 = [1, 2, 3];
    expect(flatArray(arr1)).toStrictEqual([1, 2, 3]);
  });
  it("should return a flat array when a nested array is passed as argument", () => {
    const arr1 = [1, 2, 3, [4]];
    expect(flatArray(arr1)).toStrictEqual([1, 2, 3, 4]);
  });
  it("should return a flat array when a deep nested array is passed as argument", () => {
    const arr1 = [1, 2, 3, [4, 5], [6, 7], 8];
    const arr2 = [1, [2, [3, [4, [5, [6, [7, [8]]]]]]], 9];
    expect(flatArray(arr1)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(flatArray(arr2)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
