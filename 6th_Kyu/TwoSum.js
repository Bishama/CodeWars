/* Write a function that takes an array of numbers (integers for the tests) and a target number. 
It should find two different items in the array that, when added together, give the target value. 
The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).  */


function twoSum(numbers, target) {
  
    // P => array of integers
    // R => array of two integers (indices) 
    // twoSum([2,3,1] , 4)  => [1,2]
      
    // Loop over the array
    for(let i = 0; i < numbers.length; i++){
      // At each iteration loop over the array again 
      for (let j = i+1; j < numbers.length; j++){
        //Sum current i value and each value in array one by one
        let sum = numbers[i] + numbers[j]
        // Check if the sum is equal to the target
        if (sum === target){
          return [i,j]
        }
      }
      
    }
    
  }