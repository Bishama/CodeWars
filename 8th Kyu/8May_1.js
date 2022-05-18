/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

FUNDAMENTALS*/


function findShort(string){
    let s = string.split(" ")
    let shortest_word = s[0];
    
    for(let i = 0; i < s.length; i++){
      if (s[i].length < shortest_word.length){
        shortest_word = s[i]
        
      }
      console.log(shortest_word)
    }
    return shortest_word.length;
  }