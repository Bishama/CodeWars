/* Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated 
as if they are a part of the word in this kata.*/


function reverse(str){
  //P 
  // string
  
  //R
  // reverse every other WORD
  // remove whitespaces
  // each word separated by one space
  // punctuation is part of the word
  
  //E
  // reverse("Hello and welcome!") => Hello dna welcome!
  //reverse ("How are   you doing today   ?") => How era you gniod today?
  
  //P
  //Trim leading/trailing whitespace and split by space
  let arr = str.trim().split(' ');
  //console.log(arr);
  
  //reverse every other word
  let reversedArr = arr.map((val,i) => {
    return i%2 === 0? val : val.split('').reverse().join('');
  }).join(' ');
  //console.log(reversedArr);
  return reversedArr;
  
}

