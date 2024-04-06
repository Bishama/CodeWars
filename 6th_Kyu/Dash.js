/* Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:

274 -> '2-7-4'
6815 -> '68-1-5'*/

function dashatize(num) {
    //P => number
    //R => string
    
    //Convert number to string to work with digits. Take abs to deal with negative numbers
    let str = Math.abs(num).toString()
    //Empty string to hold the result
    let res = ''
    //Loop through each digit of the stringified number
    for(let i=0; i<str.length; i++){
      //Convert string to a number
      let digit = +str[i]
      //If the digit is odd
      if(digit%2 !== 0){
        /*Add a dash before the digit if its not the first digit 
        and ensure we do not add a dash before the digit if the last 
        character of the result string is already a dash*/
        if(i>0 && res[res.length-1] !== '-'){
          res+='-'
        }
        res+=digit
        //Add a dash after the digit if its not the last digit
        if(i< str.length-1){
          res+='-'
        }
      } else{
        res+=digit
      }
      
    }
    console.log(res)
    return res
  }