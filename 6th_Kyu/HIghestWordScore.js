/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.*/

function high(x){
    //P => string
    //R => string
    // high('aa b') => 'aa'
    
    //Initialize
    let str = 'abcdefghijklmnopqrstuvwxyz'
    let dict={}
    let bestScore=0;
    let bestWord=''
  
    
    //Make dictionary containing key as chars and value as their number
    for(let i=0; i<str.length; i++){
      let alphabet = str[i]
      dict[alphabet] = i+1
    }
    
    //
    let words = x.split(' ')
    for (let word of words){
      console.log(word)
      let score = word.split('').reduce((sum,char) => {
        return sum+dict[char]
      },0)
  
      if (score>bestScore) {
        bestScore = score
        bestWord = word
      }
    }
    
    //console.log(words)
    return bestWord
  }