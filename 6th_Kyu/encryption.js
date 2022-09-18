/*Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S 
with all the even-indexed characters of S, this process should be repeated N times. */

function encrypt(text, n) {

    // P => string, integer
    // R => string
    // encrypt("012345", 3) => 135024 => 304152 => 012345
    
    // Even and odd strings
    let even = "";
    let odd = "";
    //If string is empty or integer is negative or zero
    if (!text || !text.length || n <= 0)
    {
      return text;
    }
    //Concatenate even and odd string
      for (var i = 0; i < text.length; i++){
      if (i % 2 == 0){
        even+=text[i]
      }
      else {
        odd+=text[i]
      }
    }
    //Result
    let res = odd+even
    
    //Call encrypt function until n is zero
    return encrypt(res, --n)
  
  }
  