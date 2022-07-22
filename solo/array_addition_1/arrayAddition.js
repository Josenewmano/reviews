module.exports = function ArrayAdditionI(arr) { 
  // code goes here  
  let biggest = arr.sort().pop();
  if (arr.length < 2) { return false }
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === biggest) { return true}
    }
  }
  // if (arr[arr.length-2] + arr[arr.length-1] === biggest) { return true }
  return false

}
   
// keep this function call here 
// console.log(ArrayAdditionI(readline()));