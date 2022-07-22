module.exports = function ArrayAdditionI(arr) { 
  // code goes here  
  let biggest = arr.sort(function(a, b){return a-b}).pop();
  if (arr.length < 2) { return false }
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === biggest) { return true}
    }
  }
  return false

}
   
// keep this function call here 
// console.log(ArrayAdditionI(readline()));