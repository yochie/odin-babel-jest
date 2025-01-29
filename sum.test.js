import { sum } from "./sum.js";

test("sum basic", () => {
  expect(sum(2, 3)).toBe(5);
});
