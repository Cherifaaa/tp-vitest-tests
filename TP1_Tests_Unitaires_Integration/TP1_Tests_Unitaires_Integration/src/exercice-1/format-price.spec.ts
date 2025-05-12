import { describe, expect, it } from "vitest";
import { formatPrice } from "./format-price";

describe("formatPrice", () => {
  it("formats number correctly with default separators", () => {
    expect(formatPrice(1000000)).toBe("1 000 000,00");
  });

  it("formats number with custom separators", () => {
    expect(formatPrice(1000000, { thousandSeparator: ".", decimalSeparator: "_" })).toBe("1.000.000_00");
  });

  it("throws error on invalid input", () => {
    // @ts-expect-error
    expect(() => formatPrice("invalid")).toThrow("Invalid number");
  });
});