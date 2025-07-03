/*Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

All inputs will be valid. */

function last(x){
  //string of words
  //array of words sorted alphabetically(based on last char)
  //last('man i need a taxi up to ubud') => ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']

  let wordsArr = x.split(' ').sort((a,b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1))
  console.log(wordsArr)
  return wordsArr
  
}