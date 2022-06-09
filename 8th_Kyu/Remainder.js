/* Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value. */

  // Divide the larger argument by the smaller argument and return the remainder
  function remainder(a, b){
    return a > b ? a % b : b % a;
  }