/* In this Kata, we will check if a string contains consecutive
 letters as they appear in the English alphabet and if each letter occurs only once. */

function solve(s){
    //P => string
    //R => boolean
    // "abc" => true
    //'dabc' => true
  // 'aqc' => false
  //'abbc' => false
  
  //If a single charcater, return true
  if (s.length===1){
    return true
  }
  
  //Sort the string
  let sortedChars = s.split('').sort().join('')
  console.log(sortedChars)
  //Check if the difference is 1
  for(let i=0; i<sortedChars.length-1; i++){
    if(sortedChars.charCodeAt(i+1)- sortedChars.charCodeAt(i) !== 1){
      return false
    }
  }
  
  return true
  
}

console.log(solve('acb'))