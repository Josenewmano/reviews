class Analysis {

  report(string) {
    if(string.trim() === "") { return 'No results given' }
    this.#resetVariables()
    this.#updateVariables(string)
    return this.#returnConstructor()
  }

  #resetVariables() {
    this.green = 0;
    this.amber = 0;
    this.red = 0;
    this.uncounted = 0;
  }

  #updateVariables(string) {
    string.split(',').forEach((value) => {
      value = value.toLowerCase().trim();
      if (value === 'green') {
        this.green += 1
      } else if (value === 'amber') {
        this.amber += 1
      } else if (value === 'red') {
        this.red += 1
      } else {
        this.uncounted += 1
      }
    })
  }

  #returnConstructor() {
    let output = [];
    if(this.green > 0) { output.push(`Green: ${this.green}`) };
    if(this.amber > 0) { output.push(`Amber: ${this.amber}`) };
    if(this.red > 0) { output.push(`Red: ${this.red}`) };
    if(this.uncounted > 0) { output.push(`Uncounted: ${this.uncounted}`) };
    
    return output.join('\n')
  }
}

module.exports = Analysis