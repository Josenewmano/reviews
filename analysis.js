class Analysis {

  report(string) {
    return `Green: ${string.split(', ').length}`
  }
}

module.exports = Analysis