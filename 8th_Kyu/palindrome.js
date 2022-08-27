/* Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first. */

function isPalindrome(line) {
    return (line.toString() == line.toString().split('').reverse().join(''));
  }

  