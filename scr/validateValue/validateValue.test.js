const validateValue = require("./validateValue");

describe('validateValue', () => {
  test("Корректное значения", () => {
    expect(validateValue(50)).toBe(true);
  })
  test("Больше корректного", () => {
    expect(validateValue(101)).toBe(false);
  })
  test("Меньше корректного", () => {
    expect(validateValue(-1)).toBe(false);
  })
  test("0", () => {
    expect(validateValue(0)).toBe(true);
  })
  test("100", () => {
    expect(validateValue(100)).toBe(true);
  })
})