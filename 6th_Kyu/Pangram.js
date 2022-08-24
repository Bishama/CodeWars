/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

function isPangram(string){
    //P => string
    //R => boolean
    //"The quick brown fox jumps over the lazy dog." => true
    //"This is not a pangram." => false
    
    // Check for all the alphabets in the given string
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let arr = alphabets.split('');
    return arr.every(x => string.toLowerCase().includes(x))
  }