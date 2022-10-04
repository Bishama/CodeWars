/* In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed 
a string and you must return that string in an array where an uppercase letter is a person standing up.  */

function wave(str){
    // P => string
    // R => array
    // wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
      let copy = str.split('');
      if(copy[i] !== ' ') {
      copy[i] = copy[i].toUpperCase()
      newArr.push(copy.join(''))
      }
    }
    return newArr
  }