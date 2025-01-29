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

export { capitalize, reverseString };
