/*  You have to build a Xbonacci function that takes a signature of X elements - and remember each 
next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.*/

function Xbonacci(signature, n) {
  //P => array, integer
  //R => array
  //Xbonacci([0,0,0,0,1],10),[0,0,0,0,1,1,2,4,8,16]
  //Initialize 
  var x = signature.length;
  // Loop until the length of signature array is less than 'n'
  while (signature.length < n) {
    //Slice the array according to initial length of signature array
    //Reduce the x number of elements and push into the signature array
    signature.push(signature.slice(-x).reduce((r, c) => r + c, 0));
  }
  return signature.slice(0,n);
}