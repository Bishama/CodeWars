/* decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
there are no special characters used, only letters and spaces
words are separated by a single space
there are no leading or trailing spaces
*/

function decipherThis(str) {
    //P => string
     //R => string
     //convert to array to access each word
     let res = str.split(' ').map( (word) => {
       //Extract starting digits
       let numMatch = word.match(/^\d+/)
       //convert to character
       let charCode = String.fromCharCode(numMatch[0])
       //console.log(numMatch[0])
       console.log(charCode)
       
       //Extract remaining part of the string and convert to array (as string are immutable)
       let letters = word.slice(numMatch[0].length).split('')
       console.log(letters)
       
       //Swap 2nd and last char
        if (letters.length > 1) {
         [letters[0], letters[letters.length - 1]] = [letters[letters.length - 1], letters[0]];
       }
       
       let decipheredWord = charCode + letters.join('')
       return decipheredWord
     }).join(' ')
   
     return res
   }
   
     
     
   