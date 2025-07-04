/* Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2*/


function calc(x){
  //P => string
  //R => number
  // calc('ABC') => 6
  //'ABC' => 656667 => 656661 => (6+5+6+6+6+7) - (6+5+6+6+6+1) => 6
  //Loop over the string and concatenate the charCode
  let total1 = '';
  for(let i=0; i<x.length; i++){
    total1 = total1 + x.charCodeAt(i)
  }
  console.log(total1)
  //Replace 7 with 1 in total1
  let total2 = total1.replaceAll('7','1');
  console.log(total2)
  //Add all the integer in each of the strings total1 and total2
  total1 = total1.split('').reduce( (acc, curr) => acc + Number(curr),0 );
  console.log(total1)
  total2 = total2.split('').reduce( (acc, curr) => acc + Number(curr),0 );
  console.log(total2)
  //subtract
  let result = total1 - total2;
  console.log(result)
  return result
}