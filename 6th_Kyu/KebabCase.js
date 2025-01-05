/* Modify the kebabize function so that it converts a camel case string into a kebab case. */

function kebabize(str) {
    // P => string
    //R => string, lowercase
    //camlesHaveThreeHumps => camels-have-three-humps
    //CAMEL => c-a-m-e-l
    
    //Initialize empty array
    let result = ""
    for (let i=0; i<str.length; i++){
      let char = str[i]
      //Skip if the character is a number
      if (!isNaN(char)){
        continue
      }
      //Check if character is upperCase
      if (char === char.toUpperCase()){
        //Add a hyphen if its not the first character
        if (result.length>0){
          result+='-'
        }
        //Add lowerCaseVersion of UpperCase
        result+=char.toLowerCase()
      }
      //Add lowerCase character
      else{
        result+=char
      }
    }
  return result
  }