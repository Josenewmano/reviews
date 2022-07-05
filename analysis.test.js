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

  it("returns a string matching 'Green: 3' when 'Green, Green, Green, ' is passed in", () => {
    let analysis = new Analysis
    expect(analysis.report('Green, Green, Green, ')).toEqual('Green: 3')
  })

  it("returns a string matching 'Green: 1, Amber: 1' when 'Green, Amber' is passed in", () => {
    let analysis = new Analysis
    expect(analysis.report('Green, Amber')).toEqual('Green: 1\nAmber: 1')
  })
})