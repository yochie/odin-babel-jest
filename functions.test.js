import * as functions from "./functions.js";

test("sum basic", () => {
  expect(functions.sum(2, 3)).toBe(5);
});

test("capitalize exists", () => {
  expect(functions.capitalize).toBeDefined();
});

test("capitalize basic", () => {
  expect(functions.capitalize("abc")).toBe("Abc");
});

test("capitalize redundant", () => {
  expect(functions.capitalize("ABC")).toBe("ABC");
});

test("capitalize empty", () => {
  expect(functions.capitalize("")).toBe("");
});

test("capitalize single char", () => {
  expect(functions.capitalize("a")).toBe("A");
});

test("capitalize non string", () => {
  expect(() => functions.capitalize(5)).toThrow("arg");
});
