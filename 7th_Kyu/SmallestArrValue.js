/*Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.*/


function min(arr, toReturn) { 
    // P => array of numbers, value/index
  //R => integer
  // min([1,3,8,5], 'value') => 1
  // min([1,3,8,5], 'value') => 0
  
  //Find min value
  let min = Math.min(...arr)
  return toReturn === 'index' ? arr.indexOf(min) : min 
  
}