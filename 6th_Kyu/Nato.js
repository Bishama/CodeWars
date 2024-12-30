/*  translate a string to Pilot's alphabet (NATO phonetic alphabet). */

function toNato(words) {
    let upperCaseString = words.toUpperCase()
    console.log(upperCaseString);
    let resString = ''
    for (let i=0; i<upperCaseString.length; i++){
      let letter = upperCaseString[i]
      if (NATO[letter]){
        //Append NATO word followed by a space
        resString = resString.concat(NATO[letter]).concat(' ')
      } else if (',.!?'.includes(letter)){
        //Append punctuation followed by a space
        resString = resString.concat(letter).concat(' ');
      }
      //Ignore spaces
    }
    console.log(resString)
    return resString.trim()  //Remove trailing space in end
    
  }