const sortInput = require("../sort");

describe("No. 1 Sorting Number", () => {
  const result = sortInput([1, 2, 4, 3, 5, 3, 2, 1]);
  const result2 = sortInput([1, 2, 4, 3, 5, 3, 2, 1, 6, 7, 8]);
  const result3 = sortInput([1, 2, 4, 3, 5, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8]);
  it("matches expected result", () => {
    expect([1, 1, 2, 2, 3, 3, 4, 5]).toEqual(expect.arrayContaining(result));
  });
  it("matches expected result2", () => {
    expect([1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8]).toEqual(
      expect.arrayContaining(result2)
    );
  });
  it("matches expected result3", () => {
    expect([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 7, 8]).toEqual(
      expect.arrayContaining(result3)
    );
  });
});
