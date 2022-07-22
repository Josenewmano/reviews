module.exports = function ArrayAdditionI(arr) { 
  // code goes here  
  let biggest = arr.sort(function(a, b){return a-b}).pop();
  
  function recursiveLooper(target, array){
    if(array.length === 0){
      return target === 0; 
    }
    let x = array[0];
    array = array.slice(1);
    return recursiveLooper(target,array) || recursiveLooper(target-x,array);
  }
  return recursiveLooper(biggest,arr);
}
   
// keep this function call here 
// console.log(ArrayAdditionI(readline()));