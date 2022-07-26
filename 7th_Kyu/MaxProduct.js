/* Given an array of integers , Find the maximum product obtained from 
multiplying 2 adjacent numbers in the array. */

function adjacentElementsProduct(array) {
    // P => array of integers
    // R => integer
    let max = -Infinity;
    // Update the new max
    for(let i=0; i < array.length-1; i++){
      let curr = array[i]*array[i+1]
      if (max < curr){
        max = curr
        console.log(max)
      }
    }
    return max;
  }