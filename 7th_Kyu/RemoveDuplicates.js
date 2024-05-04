/* Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3] */

function solve(arr) {
    //P => array of integers
    //R => array of integers
    // [3,4,4,3,6,3] =? [4,6,3]
    let res = []
    //Loop over the array
    for(let i=0; i<arr.length; i++){
      //Check if current element last occurence is at the current index
      if(arr.lastIndexOf(arr[i]) === i){
        res.push(arr[i])
      }
    }
    return res
  }
  
  