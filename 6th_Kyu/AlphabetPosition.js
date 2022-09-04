/*In this kata you are required to, given a string, replace every letter with its position in the alphabet. */

function alphabetPosition(text) {
    //P => string
    //R => string
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
  }