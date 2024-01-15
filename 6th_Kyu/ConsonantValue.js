/* Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26
*/

function solve(s) {
    //P => string
    //R => integer
    
    //Object of alphabets and their values
    let alphabetsValuesObject = {
      a:1,b:2,c:3,d:4,e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14,o:15,p:16,q:17,r:18,s:19,
      t:20,u:21,v:22,w:23,x:24,y:25,z:26
    }
    let highestValue=0, currentValue=0;
    //Consonants
    let vowels = ['a','e','i','o','u']
    //Loop
    for(let i=0; i<s.length; i++){
      let currLetter = s[i]
      //if current letter is not a vowel
      if(!vowels.includes(s[i])){
        //Update currentValue with the sum of alphabetsValues 
        currentValue+=alphabetsValuesObject[currLetter]
    } 
      //If we encounter vowel, se currentValue equal to 0 and hishestValue equal to maximum of current or highest value
      else{
        currentValue=0;
        highestValue= Math.max(highestValue,currentValue)
      }
      
      // Check the last substring 
    highestValue = Math.max(highestValue, currentValue);
    }
    return highestValue
  };
  
  solve('zodiacs')