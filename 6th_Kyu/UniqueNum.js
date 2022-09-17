/* There is an array with some numbers. All numbers are equal except for one. Try to find it! */

function findUniq(arr) {
    // P => array of integer
    // R => integer
    // findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    
    // Sort the array
    let sorted_arr = arr.sort()
    //If first integer in array is equal to second integer in array, return the last integer in array
    //else return the first digit
    return arr[0] == arr[1] ? arr.pop() : arr[0]
  }