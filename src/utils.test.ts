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

describe("multiply - additional edge cases", () => {
  it("multiplies floating point numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });

  it("multiplies medium-sized numbers", () => {
    expect(multiply(100, 200)).toBe(20000);
  });

  it("multiplies large numbers", () => {
    expect(multiply(1000, 1000)).toBe(1000000);
  });
});

describe("reverseString - additional edge cases", () => {
  it("reverses a string with numbers", () => {
    expect(reverseString("12345")).toBe("54321");
  });

  it("reverses a string with special characters", () => {
    expect(reverseString("a!b@c")).toBe("c@b!a");
  });

  it("reverses a string with repeated characters", () => {
    expect(reverseString("aaaa")).toBe("aaaa");
  });
});

describe("isOdd - additional edge cases", () => {
  it("returns false for negative even numbers", () => {
    expect(isOdd(-4)).toBe(false);
  });

  it("returns true for large odd number", () => {
    expect(isOdd(99999)).toBe(true);
  });

  it("returns false for large even number", () => {
    expect(isOdd(100000)).toBe(false);
  });
});

describe("capitalize - additional edge cases", () => {
  it("handles string starting with a digit", () => {
    expect(capitalize("1hello")).toBe("1hello");
  });

  it("handles string with only spaces", () => {
    expect(capitalize("   ")).toBe("   ");
  });

  it("handles two-word string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });
});
