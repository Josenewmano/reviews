class Analysis {

  report(string) {
    let green = 0;
    let amber = 0;
    let red = 0;
    let uncounted = 0;
    let output = []
    let array = string.split(',')
    if(array[0].trim() === "" && array.length === 1) { return 'No results given' }


    array.forEach((value) => {
      value = value.toLowerCase().trim();
      if (value === 'green') {
        green += 1
      } else if (value === 'amber') {
        amber += 1
      } else if (value === 'red') {
        red += 1
      } else {
        uncounted += 1
      }
    })

    if(green > 0) { output.push(`Green: ${green}`) }
    if(amber > 0) { output.push(`Amber: ${amber}`) }
    if(red > 0) { output.push(`Red: ${red}`) }
    if(uncounted > 0) { output.push(`Uncounted: ${uncounted}`) }
    
    return output.join('\n')
    
  }
}

module.exports = Analysis