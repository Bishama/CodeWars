/* sentence converts all the letters into uppercase, and adds 2 spaces between each letter */

function vaporcode(string) {
    // P => string
    // R => string, uppercase, 2 spaces bw characters
    //E How are you? => H  O  W  A  R  E  Y  O  U  ?
    
    let result = ''
    
    for(let i=0; i<string.length; i++){
      let char = string[i]
      //Skip spaces in the input string
       if (char == ' '){
         continue
       }
      //Add 2 spaces except the first character and the last character
      if (result.length > 0 || !result.length == string.length){
        result+= '  '
      }
      //Add the uppercase version of the character
      result+= char.toUpperCase()
      
    }
    return result
  }