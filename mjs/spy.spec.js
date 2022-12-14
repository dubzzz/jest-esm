import { jest } from "@jest/globals";

jest.unstable_mockModule("./db.js", () => ({
  compute: jest.fn(),
}));

const { run } = await import("./main.js");
const DbMock = await import("./db.js");

test("should compute the right value", () => {
  const compute = jest.spyOn(DbMock, "compute");
  compute.mockImplementation((a, b) => a * b);
  expect(run(1, 2, 3)).toBe(1 * 2 + 2 * 3);
  expect(compute).toHaveBeenCalledTimes(2);
  expect(compute).toHaveBeenCalledWith(1, 2);
  expect(compute).toHaveBeenCalledWith(2, 3);
});
