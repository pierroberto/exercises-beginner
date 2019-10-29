const {flatArray, sum, fibonacci} = require("./index");


describe("Test flatArray function", () => {
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

describe("Test sum function", () => {
  it('should return a sum of array', () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([15, 20, 32])).toBe(67);
    expect(sum([1.5, 2.2, 3.0])).toBe(6.7);
    expect(sum([-1, 4, 7, -2])).toBe(8);
  });
  it("should return 0 if the argument is undefined", () => {
    expect(sum(undefined)).toBe(0);
  });
  it("should return 0 if the argument is null", () => {
    expect(sum(null)).toStrictEqual(0);
  });
  it('should return "error" if array[i] is not a number', () => {
    expect(sum(["a", "b", "c"])).toBe("error");
    expect(sum([1, "b", 3])).toBe("error");
  });
  it("should return 0 if the argument is a string", () => {
    expect(sum("hello")).toBe(0);
  });
  
});

describe("Test fibonacci function", () => {
  it('should return an array', () => {
    expect(fibonacci(10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    
  });
  
  
});

