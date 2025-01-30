function capitalize(s) {
  if (typeof s !== "string") {
    throw new Error("arg must be string");
  }
  if (s.length === 0) {
    return "";
  }

  return s.charAt(0).toUpperCase() + s.substring(1);
}

function reverseString(s) {
  if (typeof s !== "string") {
    throw new Error("arg must be string");
  }
  return s.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Args must be numbers");
    }

    return a + b;
  },

  subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Args must be numbers");
    }
    return a - b;
  },

  divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Args must be numbers");
    }
    return a / b;
  },

  multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Args must be numbers");
    }
    return a * b;
  },
};

export { capitalize, reverseString, calculator };
