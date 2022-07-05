class Analysis {

  report(string) {
    let green = 0;
    let array = string.split(', ')

    array.forEach((value) => {
      if (value === 'Green') {
        green += 1
      }
    })

    return `Green: ${green}`
  }
}

module.exports = Analysis