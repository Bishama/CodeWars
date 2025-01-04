/* create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers. */

function calculator(a,b,sign){
    switch(sign) {
        case '+':
          return a+b
          break
        case '-' :
          return a-b
          break
        case '*':
          return a*b
          break
        case '/':
          return a/b
          break
        default:
          return 'unknown value'
    }
  
  
  }