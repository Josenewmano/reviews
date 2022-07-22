const ArrayAdditionI = require('./arrayAddition.js');

describe(ArrayAdditionI, () => {
  it("returns false for [0,1]", () => {
    expect(ArrayAdditionI([0,1])).toBe(false);
  })
  it("returns false for [0,0,1]", () => {
    expect(ArrayAdditionI([0,0,1])).toBe(false);
  })
  it("returns true for [1,1,2]", () => {
    expect(ArrayAdditionI([1,1,2])).toBe(true);
  })
  it("returns true for [1,2,1]", () => {
    expect(ArrayAdditionI([1,2,1])).toBe(true);
  })
  it("returns true for [1,2,1,1]", () => {
    expect(ArrayAdditionI([1,2,1,1])).toBe(true);
  })
  it("returns true for [0,1,1,2]", () => {
    expect(ArrayAdditionI([0,1,1,2])).toBe(true);
  })
  it("returns true for [0,1,1,2]", () => {
    expect(ArrayAdditionI([0,1,1,2])).toBe(true);
  })
  it("returns true for [0,1,0,1,2]", () => {
    expect(ArrayAdditionI([0,1,0,1,2])).toBe(true);
  })
})