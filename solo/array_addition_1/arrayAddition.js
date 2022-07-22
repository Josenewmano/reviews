module.exports = function ArrayAdditionI(arr) { 
  // code goes here  
  arr.sort();
  let biggest = arr.pop();
  if (arr.length < 2) { return false }
  if (arr[arr.length-2] + arr[arr.length-1] === biggest) { return true }
  return false

}
   
// keep this function call here 
// console.log(ArrayAdditionI(readline()));