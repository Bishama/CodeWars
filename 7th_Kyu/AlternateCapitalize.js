/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'] */

function capitalize(s){
    //P => string
    //R => array of 2 strings
    // check for odd
    let odd = s.split("").map((a,b) => b % 2 !== 0 ? a.toUpperCase() : a).join("");
    //Check for even
    let even = s.split("").map((a,b) => b % 2 === 0 ? a.toUpperCase() : a).join("");
    //result
    return [even, odd];
  };