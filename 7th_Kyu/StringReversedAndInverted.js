/*Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER  */

function reverseAndMirror(s1,s2) {
    //P => 2 strings
    //R => 2nd string: reversed invertedCase
    // separator between both strings is @@@, 
    // 1st string: reverse mirrored invertedCase
    
    //(FizZ, buZZ) => zzUB@@@zZIffIZZ
    
    //final string
    let result = ''
    //s2
    let string2 = ''
    for (let i=s2.length-1; i>=0; i--){
      let char = s2[i]
      if(char === char.toUpperCase()){
        char = char.toLowerCase()
      } else {
        char = char.toUpperCase()
      }
      string2+=char
    }
    
    result = result.concat(string2 , '@@@')
    
    //s1
    let string1 = ''
    for (let i=s1.length-1; i>=0; i--){
      let char = s1[i]
      if(char === char.toUpperCase()){
        char = char.toLowerCase()
      } else {
        char = char.toUpperCase()
      }
      string1+=char
    }
    
    result+=string1
    
    //s1
    let str1 = ''
    for (let i=0; i<s1.length; i++){
      let char = s1[i]
      if(char === char.toUpperCase()){
        char = char.toLowerCase()
      } else {
        char = char.toUpperCase()
      }
      str1+=char
    }
    
    result+=str1
      
    console.log(string2)
    console.log(string1)
    console.log(result)
    return result
  }