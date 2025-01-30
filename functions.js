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

function caesarCipher(str, shiftAmount) {
  if (typeof str !== "string") {
    throw new Error("first arg must be string");
  }
  if (typeof shiftAmount !== "number") {
    throw new Error("second arg must be integer");
  }
  const lowerBase = "a".charCodeAt(0);
  const upperBase = "A".charCodeAt(0);
  const chars = str.split("");
  const shiftedChars = chars.map((char) => {
    const charCode = char.charCodeAt(0);

    let newCharCode;
    let lowerOffset = charCode - lowerBase;
    let upperOffset = charCode - upperBase;
    if (lowerOffset >= 0 && lowerOffset < 26) {
      //lowercase
      newCharCode = lowerBase + ((lowerOffset + shiftAmount) % 26);
    } else if (upperOffset >= 0 && upperOffset < 26) {
      //uppercase
      newCharCode = upperBase + ((upperOffset + shiftAmount) % 26);
    } else {
      //not basic char
      return char;
    }
    return String.fromCharCode(newCharCode);
  });

  return shiftedChars.join("");
}

export { capitalize, reverseString, calculator, caesarCipher };
