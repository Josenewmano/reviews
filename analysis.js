class Analysis {

  report(string) {
    let green = 0;
    let amber = 0;
    let array = string.split(', ')

    array.forEach((value) => {
      if (value === 'Green') {
        green += 1
      } else if (value === 'Amber') {
        amber += 1
      }
    })

    if(green > 0 && amber > 0) {
      return `Green: ${green}\nAmber: ${amber}`
    } else if(green === 0) {
      return `Amber: ${amber}`
    } else if(amber === 0) {
      return `Green: ${green}`
    }
  }
}

module.exports = Analysis