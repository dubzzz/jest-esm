import { jest } from "@jest/globals";

jest.unstable_mockModule("./db", () => ({
  compute: (a, b) => a * b,
}));

const { run } = await import("./main.js");

beforeEach(() => {
  jest.resetAllMocks();
});

test("should compute the right value", () => {
  // Not sure we can do: 'toHaveBeenCalled*'
  expect(run(1, 2, 3)).toBe(1 * 2 + 2 * 3);
});
