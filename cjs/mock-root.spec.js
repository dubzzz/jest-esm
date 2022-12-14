const { run } = require("./main");

jest.mock("./db", () => ({
  compute: (a, b) => a * b,
}));

beforeEach(() => {
  jest.resetAllMocks();
});

test("should compute the right value", () => {
  // Not sure we can do: 'toHaveBeenCalled*'
  expect(run(1, 2, 3)).toBe(1 * 2 + 2 * 3);
});
