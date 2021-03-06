const Analysis = require('./analysis');

describe(Analysis, () => {
  let analysis = new Analysis

  it("returns correct values for input strings containing 'Green'", () => {
    expect(analysis.report('Green, Green, Green')).toEqual('Green: 3')
  })

  it("returns correct values for input strings containing 'Green' and 'Amber'", () => {
    expect(analysis.report('Green, Amber, Green, Amber')).toEqual('Green: 2\nAmber: 2')
  })

  it("returns correct values for input strings for all three scores, and other unrecognised scores", () => {
    expect(analysis.report('Green, Amber, Red, Something else')).toEqual('Green: 1\nAmber: 1\nRed: 1\nUncounted: 1')
  })

  it("is case insensitive", () => {
    expect(analysis.report('GrEeN, GREEN, green')).toEqual('Green: 3')
  })

  it("is ignores leading and trailing spaces", () => {
    expect(analysis.report(' GrEeN,    GREEN    , green            ')).toEqual('Green: 3')
  })

  it("returns 'No results given' if called with an empty string", () => {
    expect(analysis.report('')).toEqual('No results given')
  })
})