/*  Write a function will break up camel casing, using a space between words. */

function solution(string) {
  
    //P => string
    //R => string
    // 'HelloWorld' => Hello World
  
    //Initialze the result
    res = ''
    //If there is capital character add space
    for (let i=0; i<string.length; i++){
      let char = string[i]
      if(char === char.toUpperCase()){
        res+= ' '
      }
      res+=char
    }
    return res
  }