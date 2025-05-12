import { describe, it, expect } from "vitest";
import { formatDate } from "./format-date";

describe("formatDate", () => {
  it("should return correct default format", () => {
    const result = formatDate(new Date("2023-12-12T23:59:00"));
    expect(result).toContain("12/12/2023");
  });
});