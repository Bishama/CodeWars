/* In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task 
is to convert that string to either lowercase only or uppercase only based on:
make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase. */

function solve(s){
    // P => string
    // R => string
    // COdE => CODE,   cOde => code,    coDE => code
    
    // Count uppercase letters in a string
    let upperLen = (s.match(/[A-Z]/g) || []).length;  
    console.log(upperLen)
    // Count uppercase letters in a string
    let lowerLen = (s.match(/[a-z]/g) || []).length;  
    console.log(lowerLen)
    // Uppercase is more than the lowerCase
    if (upperLen > lowerLen) {
      return s.toUpperCase()
    }
    // Uppercase less than the lowerCase
    if (upperLen < lowerLen) {
      return s.toLowerCase()
    }
    //Uppercase equal to Lowercase
    if (upperLen == lowerLen) {
      return s.toLowerCase()
    }
  }