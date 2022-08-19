/* A number is called Automorphic number if and only if its square ends in the same digits as the number itself. */


function automorphic(n){
    //P => integer
    //R => string
    let num = n.toString();
    let sqr = Math.pow(n,2).toString();
    return n == sqr.slice(-num.length) ? "Automorphic" : "Not!!" 
  }