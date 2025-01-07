/* Given an array/list [] of integers , Find the product of the k maximal numbers. */

function maxProduct(numbers, size){
    //P => array of integers, pos neg zeros, atleast 3
    // R => integer
    // maxProduct ([3,7,9,4,1,4], 3) => 9*7*4
    
    // Sort the array in descending order
    let sorted = numbers.sort((a,b) => b-a)
    // Get the integers for the size
    let arr = sorted.slice(0,size)
    // Take the product of all integers in the arr
    let result = arr.reduce(
    (accumulator, currentValue) => accumulator*currentValue
    )
    
    return result
    
  }