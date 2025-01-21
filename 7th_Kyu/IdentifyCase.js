/*  implement a function that takes a string and returns a string with the case the input is in. 
The possible case types are “kebab”, “camel”, and ”snake”. If none of the cases match with the input, 
or if there are no 'spaces' in the input, return “none”. Inputs will only have letters (no numbers 
or special characters). */

function id(c_str) {
  // P => string
  // R => camel case, kebab case, snake case
  
  let kebab = /^[a-z]+(-[a-z]+)+$/
  let snake = /^[a-z]+(_[a-z]+)+$/
  let camel = /^[a-z]+([A-Z][a-z]+)+$/
  
  if(kebab.test(c_str)){
    return 'kebab'
  }
  else if (snake.test(c_str)){
    return 'snake'
  } else if (camel.test(c_str)){
    return 'camel'
  } else{
    return 'none'
  }
}