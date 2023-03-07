const arrayAddition = require("../arrayAddition");
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

describe("No. 2 Array Addition", () => {
  const result1 = arrayAddition([100, 200, 300, 400], 2);
  const result2 = arrayAddition([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
  const result3 = arrayAddition([-3, 4, 0, -2, 6, -1], 2);

  it("matches expected result1", () => {
    expect(result1).toEqual(700);
  });
  it("matches expected result2", () => {
    expect(result2).toEqual(39);
  });
  it("matches expected result3", () => {
    expect(result3).toEqual(5);
  });
});
