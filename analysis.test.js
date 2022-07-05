const Analysis = require('./analysis');

describe(Analysis, () => {
  it("returns a string matching 'Green: 1' when 'Green' is passed in", () => {
    let analysis = new Analysis
    expect(analysis.report('Green')).toEqual('Green: 1')
  })

  it("returns a string matching 'Green: 2' when 'Green, Green' is passed in", () => {
    let analysis = new Analysis
    expect(analysis.report('Green, Green')).toEqual('Green: 2')
  })

  it("returns a string matching 'Green: 3' when 'Green, Green, Green' is passed in", () => {
    let analysis = new Analysis
    expect(analysis.report('Green, Green, Green')).toEqual('Green: 3')
  })

  it("returns a string matching 'Green: 1\nAmber: 1' when 'Green, Amber' is passed in", () => {
    let analysis = new Analysis
    expect(analysis.report('Green, Amber')).toEqual('Green: 1\nAmber: 1')
  })

  it("returns a string matching 'Green: 2\nAmber: 2' when 'Green, Amber, Green, Amber' is passed in", () => {
    let analysis = new Analysis
    expect(analysis.report('Green, Amber, Green, Amber')).toEqual('Green: 2\nAmber: 2')
  })

  it("returns a string matching 'Green: 1\nAmber: 1\nRed: 1\nUncounted: 1' when 'Green, Amber, Red, Something else' is passed in", () => {
    let analysis = new Analysis
    expect(analysis.report('Green, Amber, Red, Something else')).toEqual('Green: 1\nAmber: 1\nRed: 1\nUncounted: 1')
  })
})