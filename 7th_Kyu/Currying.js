/* make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.*/

function multiplyAll(arr) {
    return function(int){
      return arr.map( num => num*int )
    }
  }