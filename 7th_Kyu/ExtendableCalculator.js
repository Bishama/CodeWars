//Create a constructor function Calculator that creates “extendable” calculator objects.mplement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -

function Calculator (){}

//Add method to constructor
Calculator.prototype.calculate = function (str){
  
  //Split the string
  let parts = str.split(' ');
  //console.log(parts)
  //Convert n1 and n2 to flaots
  let n1 = parseFloat(parts[0]);
  //console.log(n1)
  let n2 = parseFloat(parts[parts.length-1]);
  //console.log(n2);
  //Store operator
  let operator = parts[1];
  //console.log(operator)
  //Condition to identify which operator to use
  switch(operator){
      case '+':
        return n1+n2;
        break;
      case '-':
        return n1-n2;
        break;
      case '*':
        return n1*n2;
        break;
      case '/':
        return n1/n2;
        break;
      default:
        return 'No operator'
  }
}

//Make object from the constructor
let calc = new Calculator();
console.log(calc.calculate("3 * 9"));