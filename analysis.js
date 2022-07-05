class Analysis {

  report(string) {
    return `${string.split(', ')[0]}: ${string.split(', ').length}`
  }
}

module.exports = Analysis