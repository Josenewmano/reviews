const Analysis = require('./analysis');

describe(Analysis, () => {
  let analysis = new Analysis

  it("returns correct values for input strings containing 'Green'", () => {
    expect(analysis.report('Green, Green, Green')).toEqual('Green: 3')
  })

  it("returns correct values for input strings containing 'Green' and 'Amber'", () => {
    expect(analysis.report('Green, Amber, Green, Amber')).toEqual('Green: 2\nAmber: 2')
  })

  it("rreturns correct values for input strings for all three scores, and other unrecognised scores", () => {
    expect(analysis.report('Green, Amber, Red, Something else')).toEqual('Green: 1\nAmber: 1\nRed: 1\nUncounted: 1')
  })
})