import { describe, expect, it, vi } from "vitest";
import { createTodo } from "./create-todo";
import type { Mock } from "vitest";

describe("createTodo", () => {
  it("returns created todo on success", async () => {
    const mockResponse = { id: 1, label: "Test", completed: false };
    (global.fetch as Mock) = vi.fn().mockResolvedValue({
      ok: true,
      json: () => mockResponse
    });

    const result = await createTodo({ label: "Test", completed: false });
    expect(result).toEqual(mockResponse);
  });

  it("throws error on failure", async () => {
    (global.fetch as Mock) = vi.fn().mockResolvedValue({ ok: false });

    await expect(createTodo({ label: "Fail", completed: true })).rejects.toThrow("La tâche n'a pas pu être créée");
  });
});