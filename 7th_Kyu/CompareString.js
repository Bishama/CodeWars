/* Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
 */


function compare(s1, s2) {
    //P => strings
    //R => boolean
    
    
    const cleanString = (str) => {
      if (!str || /[^a-zA-Z]/.test(str)) return "";
      return str.toUpperCase();
    };
  
    // Reassign s1 and s2
    s1 = cleanString(s1);
    s2 = cleanString(s2);
  
    
    let arr1 = s1.toUpperCase().split('').map(x => x.charCodeAt()).reduce(
    (acc, curr) => acc+curr,0
    )
    
    let arr2 = s2.toUpperCase().split('').map(x => x.charCodeAt()).reduce(
    (acc, curr) => acc+curr, 0
    )
    
    return arr1 === arr2
  }