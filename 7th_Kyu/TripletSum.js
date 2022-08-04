/* Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications . */

function maxTriSum(numbers){
    //P => array of integers
    //R => integer
    // Sort the array in descending order
    let sortedArr = numbers.sort(function(a, b){return b - a});
    console.log(sortedArr);
    // Remove the duplicates
    let arr = numbers.filter((e, i) => numbers.indexOf(e) === i)
    console.log(arr)
    // Add first 3 numbers of array
      return arr[0] + arr[1] + arr[2]
  }