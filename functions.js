function sum(a, b) {
  return a + b;
}

function capitalize(s) {
  if (typeof s !== "string") {
    throw new Error("arg must be string");
  }
  if (s.length === 0) {
    return "";
  }

  return s.charAt(0).toUpperCase() + s.substring(1);
}

export { sum, capitalize };
