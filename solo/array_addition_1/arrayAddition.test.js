const ArrayAdditionI = require('./arrayAddition.js');

describe(ArrayAdditionI, () => {
  it("returns false for [0,1]", () => {
    expect(ArrayAdditionI([0,1])).toBeFalsy();
  })
  it("returns true for [1,1,2]", () => {
    expect(ArrayAdditionI([1,1,2])).toBeTruthy();
  })
})