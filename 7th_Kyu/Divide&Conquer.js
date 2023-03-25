/* Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.*/

function divCon(x){
    let intSum = 0;
    let strSum = 0;
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] === 'number') {
        intSum += x[i];
      } else if (typeof x[i] === 'string') {
        strSum += parseInt(x[i]);
      }
    }
    return intSum - strSum
  }