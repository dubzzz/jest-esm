const { run } = require("./main");
const DbMock = require("./db");

jest.mock("./db");

beforeEach(() => {
  jest.resetAllMocks();
});

test("should compute the right value", () => {
  const { compute } = DbMock;
  compute.mockImplementation((a, b) => a * b);
  expect(run(1, 2, 3)).toBe(1 * 2 + 2 * 3);
  expect(compute).toHaveBeenCalledTimes(2);
  expect(compute).toHaveBeenCalledWith(1, 2);
  expect(compute).toHaveBeenCalledWith(2, 3);
});
