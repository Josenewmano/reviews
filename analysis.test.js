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

  it("returns a string matching 'Red: 1' when 'Red' is passed in", () => {
    let analysis = new Analysis
    expect(analysis.report('Red')).toEqual('Red: 1')
  })

  it("returns a string matching 'Red: 2' when 'Red, Red' is passed in", () => {
    let analysis = new Analysis
    expect(analysis.report('Red, Red')).toEqual('Red: 2')
  })

  it("returns a string matching 'Amber: 1' when 'Amber' is passed in", () => {
    let analysis = new Analysis
    expect(analysis.report('Amber')).toEqual('Amber: 1')
  })

  it("returns a string matching 'Amber: 2' when 'Amber, Amber' is passed in", () => {
    let analysis = new Analysis
    expect(analysis.report('Amber, Amber')).toEqual('Amber: 2')
  })
})