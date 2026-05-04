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

  it("multiplies by zero returns zero", () => {
    expect(multiply(5, 0)).toBe(0);
  });

  it("multiplies two negative numbers returns positive", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  it("multiplies a positive and a negative returns negative", () => {
    expect(multiply(3, -4)).toBe(-12);
  });

  it("multiplies by one returns the same number", () => {
    expect(multiply(7, 1)).toBe(7);
  });
});

describe("reverseString", () => {
  it("reverses a simple string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("reverses a single character string", () => {
    expect(reverseString("a")).toBe("a");
  });

  it("returns empty string when given empty string", () => {
    expect(reverseString("")).toBe("");
  });

  it("reverses a palindrome correctly", () => {
    expect(reverseString("racecar")).toBe("racecar");
  });

  it("reverses a string with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });
});

describe("isOdd", () => {
  it("returns true for an odd number", () => {
    expect(isOdd(7)).toBe(true);
  });

  it("returns false for an even number", () => {
    expect(isOdd(4)).toBe(false);
  });

  it("returns true for negative odd number", () => {
    expect(isOdd(-3)).toBe(true);
  });

  it("returns false for negative even number", () => {
    expect(isOdd(-8)).toBe(false);
  });

  it("returns false for zero", () => {
    expect(isOdd(0)).toBe(false);
  });
});

describe("capitalize", () => {
  it("capitalizes the first letter and lowercases the rest", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("lowercases an all-uppercase string except first char", () => {
    expect(capitalize("WORLD")).toBe("World");
  });

  it("handles a mixed-case string", () => {
    expect(capitalize("hElLo WoRlD")).toBe("Hello world");
  });

  it("returns empty string when given empty string", () => {
    expect(capitalize("")).toBe("");
  });

  it("handles a single character", () => {
    expect(capitalize("a")).toBe("A");
  });

  it("handles a string already correctly capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });
});
