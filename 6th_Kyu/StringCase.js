/* Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:*/

function toWeirdCase(string){
    //P => string
    //R => string
    //String case, StRiNg CaSe;      UPPER CASE, UpPeR CaSe;
    
    //Initialize resulting string
    let res = ''
    let counter = 0
    
    for(let i=0; i<string.length; i++){
      let char = string[i]
      //Reset the counter if there is space
      if(char === ' '){
        //Add space to the result
        res+=char
        counter = 0
      }
      else{
        //If index is 0 or even, add upperase version of character to the result
        if (counter%2 === 0){
        res+=char.toUpperCase()
        }
        //Otherwise add the lowerCase version of that character
          else{
            res+=char.toLowerCase()
            }
        counter++   // Increase counter only for non space characters
    }
        
      }
      
    console.log(res)
    return res
  }