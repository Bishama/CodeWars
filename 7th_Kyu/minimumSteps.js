/* Given an array of N integers, you have to find how many times you have to add up the 
smallest numbers in the array until their Sum becomes greater or equal to K. */


function minimumSteps(numbers, value){
    // P => array of integers
    // R => integer
    // {1, 10, 12, 9, 2, 3}, 6 => 2
    let sum = 0;
    let count = 0;
    // Sort the array
    sortedArr = numbers.sort(function(a, b){return a-b});
    //Loop
    for(let i=0; i<numbers.length; i++){
      if (sum >= value){
        break;
      }
      sum+=numbers[i]
      count++
    }
    return count-1;
  }