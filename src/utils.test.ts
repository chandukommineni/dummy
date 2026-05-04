import { describe, it, expect } from "vitest";
import { add, slugify, isEven, multiply, reverseString, isOdd, capitalize } from "./utils.js";

describe("add", () => {
  it("sums two positive integers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("handles negatives", () => {
    expect(add(-4, 1)).toBe(-3);
  });
});

describe("slugify", () => {
  it("lowercases and replaces spaces with hyphens", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("strips punctuation", () => {
    expect(slugify("Hello, World!")).toBe("hello-world");
  });

  it("trims leading and trailing hyphens", () => {
    expect(slugify("  --hello--  ")).toBe("hello");
  });
});

describe("isEven", () => {
  it("returns true for even numbers", () => {
    expect(isEven(4)).toBe(true);
  });

  it("returns false for odd numbers", () => {
    expect(isEven(7)).toBe(false);
  });
});

describe("multiply", () => {
  it("multiplies two positive integers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it("multiplies by zero", () => {
    expect(multiply(5, 0)).toBe(0);
  });

  it("multiplies two negative numbers", () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it("multiplies a positive and a negative number", () => {
    expect(multiply(4, -2)).toBe(-8);
  });

  it("multiplies by one (identity)", () => {
    expect(multiply(7, 1)).toBe(7);
  });
});

describe("reverseString", () => {
  it("reverses a simple word", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("reverses a sentence", () => {
    expect(reverseString("abc def")).toBe("fed cba");
  });

  it("returns empty string unchanged", () => {
    expect(reverseString("")).toBe("");
  });

  it("returns single character unchanged", () => {
    expect(reverseString("a")).toBe("a");
  });

  it("reverses a palindrome correctly", () => {
    expect(reverseString("racecar")).toBe("racecar");
  });
});

describe("isOdd", () => {
  it("returns true for odd numbers", () => {
    expect(isOdd(3)).toBe(true);
  });

  it("returns false for even numbers", () => {
    expect(isOdd(4)).toBe(false);
  });

  it("returns true for negative odd numbers", () => {
    expect(isOdd(-5)).toBe(true);
  });

  it("returns false for zero", () => {
    expect(isOdd(0)).toBe(false);
  });
});

describe("capitalize", () => {
  it("capitalizes the first letter and lowercases the rest", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("lowercases subsequent letters that were uppercase", () => {
    expect(capitalize("hELLO")).toBe("Hello");
  });

  it("handles already capitalized string", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("returns empty string unchanged", () => {
    expect(capitalize("")).toBe("");
  });

  it("handles single character string", () => {
    expect(capitalize("a")).toBe("A");
  });

  it("handles all uppercase string", () => {
    expect(capitalize("WORLD")).toBe("World");
  });
});
