/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed. */

function sumTwoSmallestNumbers(numbers) {  
    //P -> array of integers
    //R -> Integer
    // Sort the numbers 
    numbers.sort(function(a, b){return a-b});
    // Return sum of first and second number
    return numbers[0] + numbers[1];
  }