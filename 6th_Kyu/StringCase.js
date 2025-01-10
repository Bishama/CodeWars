/* */

function toWeirdCase(string){
    //P => string
    //R => string
    //String case, StRiNg CaSe;      UPPER CASE, UpPeR CaSe;
    
    //Initialize resulting string
    let res = ''
    
    for(let i=0; i<string.length; i++){
      let char = string[i]
      //If index is 0 or even, add upperase version of character to the result
      if (i%2 == 0 || i == 0){
        res+=char.toUpperCase()
      }
      //Otherwise add the lowerCase version of that character
      else{
        res+=char.toLowerCase()
      }
    }
    console.log(res)
    return res
  }