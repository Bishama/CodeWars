/* write a function that reverses the words in a given string.
"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
*/



function reverse(string){
    return string.split(' ').reverse().join(' ');
  }