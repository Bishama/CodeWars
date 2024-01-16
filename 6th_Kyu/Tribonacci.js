/* 
 create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
it should works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. 
So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence 
shifted by 2 places, but that is not the case and we would get:
[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array 
*/

function tribonacci(signature,n){
    //Loop n-3 times as we already have 3 elements in signature array
    for (let i=0; i<n-3; i++){
      //Push sum of current and next 2 elements at end of signature array
      signature.push(signature[i]+signature[i+1]+signature[i+2])
    }
    //If n is less than signature length
    return signature.slice(0,n)
  }