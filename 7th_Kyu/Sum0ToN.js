/*
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
*/

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      let res='';
      let sum=0;
      if(count < 0){
        return res = `${count}<0`
      }
      if (count > 0){
        for(let i=0; i<=count; i++){
          sum+=i
          res+= `${i}+`
        }
        console.log(sum)
        console.log(res)
        console.log(`${res}=${sum}`)
      }
      else{
        return res='0=0'
      }
    };
  
    return SequenceSum;
  
  })();