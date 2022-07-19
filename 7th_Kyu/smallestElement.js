/* Given an array/list [] of integers , Find the Nth smallest element in this array of integers */


function nthSmallest(arr, pos){
    // P => array of integers
    // R => integer
    // sort the array
    let sortedArr = arr.sort((function(a, b){return a - b}));
    return sortedArr[pos-1];
  }