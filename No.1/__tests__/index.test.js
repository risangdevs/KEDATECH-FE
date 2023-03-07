const { arrayAddition, objectSearch, sortInput } = require("../index");
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

describe("No. 3 Object Even Number Sum", () => {
  const result1 = objectSearch({
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  });
  const result2 = objectSearch({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 4 }, ee: "car" },
  });

  it("matches expected result1", () => {
    expect(result1).toEqual(6);
  });
  it("matches expected result2", () => {
    expect(result2).toEqual(12);
  });
});
