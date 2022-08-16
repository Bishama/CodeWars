/* Given an integral number, determine if it's a square number: */



var isSquare = function(n){
    //P => integer
    //R => Boolean
    // 25 => true
    
    return Number.isInteger(Math.sqrt(n));
  }