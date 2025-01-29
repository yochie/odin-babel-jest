import * as functions from "./functions.js";
describe("capitalize", () => {
  test("exists", () => {
    expect(functions.capitalize).toBeDefined();
  });

  test("happy", () => {
    expect(functions.capitalize("abc")).toBe("Abc");
  });

  test("redundant", () => {
    expect(functions.capitalize("ABC")).toBe("ABC");
  });

  test("empty", () => {
    expect(functions.capitalize("")).toBe("");
  });

  test("single char", () => {
    expect(functions.capitalize("a")).toBe("A");
  });

  test("non string throws", () => {
    expect(() => functions.capitalize(5)).toThrow("arg");
  });
});

describe("reverseString", () => {
  test("exists", () => {
    expect(functions.reverseString).toBeDefined();
  });

  test("happy", () => {
    expect(functions.reverseString("abc")).toBe("cba");
    expect(functions.reverseString("xyz")).toBe("zyx");
  });

  test("empty", () => {
    expect(functions.reverseString("")).toBe("");
  });

  test("single char", () => {
    expect(functions.reverseString("a")).toBe("a");
  });

  test("bad input throws", () => {
    expect(() => functions.reverseString(5)).toThrow("arg");
  });
});
