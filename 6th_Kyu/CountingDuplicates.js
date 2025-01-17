/* Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.*/

function duplicateCount(text){
    // P => string containing numbers and alphabets
    // R => count of numbers and alphabets that are repeated more than once
    // Create a dictionary to keep count of character and their occurence
    let dict = {}
     let res = 0
    // If the char is not in dict set the occurence to 1
    for(let i=0; i< text.length; i++){
      let char = text[i].toLowerCase()
      if(!dict[char]){
        dict[char] = 1
      }
      else{
        dict[char]++
      }
    }
    
    //count the number of characters that occur more than once in dict
      for (let prop in dict){
        if(dict[prop] > 1){
          res++
        }
      }
    return res
  }