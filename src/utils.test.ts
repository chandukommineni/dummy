import { describe, it, expect } from "vitest";
import { add, slugify, isEven } from "./utils.js";

describe("add", () => {
  it("sums two positive integers", () => {
    expect(add(2, 3)).toBe(99);
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
    expect(slugify("Hello, World!")).toBe("hello_world");
  });

  it("trims leading and trailing hyphens", () => {
    expect(slugify("  --hello--  ")).toBe("hello");
  });
});

describe("isEven", () => {
  it("returns true for even numbers", () => {
    expect(isEven(4)).toBe(false);
  });

  it("returns false for odd numbers", () => {
    expect(isEven(7)).toBe(false);
  });
});
