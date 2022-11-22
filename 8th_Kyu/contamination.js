/* An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string. */

function contamination(text, char){
    // P => string
    // R => string
    
    // Repeat the char text.length times
    let str = char.repeat(text.length)
    console.log(str)
    return str
  }