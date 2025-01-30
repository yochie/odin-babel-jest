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

describe("calculator", () => {
  test("exists", () => {
    expect(functions.calculator).toBeDefined();
    expect(functions.calculator.add).toBeDefined();
    expect(functions.calculator.subtract).toBeDefined();
    expect(functions.calculator.divide).toBeDefined();
    expect(functions.calculator.multiply).toBeDefined();
  });

  test("add", () => {
    expect(functions.calculator.add(1, 1)).toBe(2);
  });

  test("sub", () => {
    expect(functions.calculator.subtract(3, 1)).toBe(2);
    expect(functions.calculator.subtract(1, 1)).toBe(0);
    expect(functions.calculator.subtract(0, 2)).toBe(-2);
  });

  test("divide", () => {
    expect(functions.calculator.divide(1, 3)).toBeCloseTo(0.333333);
    expect(functions.calculator.divide(4, 2)).toBe(2);
  });

  test("multiply", () => {
    expect(functions.calculator.multiply(2, 3)).toBe(6);
    expect(functions.calculator.multiply(4, 2)).toBe(8);
  });

  test("bad input throws", () => {
    expect(() => functions.calculator.add("a", 5)).toThrow();
    expect(() => functions.calculator.subtract("a", 5)).toThrow();
    expect(() => functions.calculator.multiply("a", 5)).toThrow();
    expect(() => functions.calculator.divide("a", 5)).toThrow();
  });
});

describe("caesarCipher", () => {
  test("exists", () => {
    expect(functions.caesarCipher).toBeDefined();
  });

  test("happy", () => {
    expect(functions.caesarCipher("abc", 1)).toBe("bcd");
    expect(functions.caesarCipher("abc", 2)).toBe("cde");
  });

  test("wrap", () => {
    expect(functions.caesarCipher("xyz", 3)).toBe("abc");
  });

  test("with uppercase", () => {
    expect(functions.caesarCipher("xYz", 3)).toBe("aBc");
  });

  test("with special chars ignored", () => {
    expect(functions.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("bad input throws", () => {
    expect(() => functions.caesarCipher(5)).toThrow("arg");
  });
});
