/* Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent. */


function isPowerOfTwo(n){
    //Parameters: non-negative integer
    //Result: Boolean
    return Number.isInteger(Math.log2(n))
  }