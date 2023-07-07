/*Complete the function which converts a binary number (given as a string) to a decimal number.*/

function binToDec(bin){
    let decimal = 0;
 
   // Iterate over each character in the binary string
   for (let i = 0; i < bin.length; i++) {
     // Convert the character to a number
     const digit = parseInt(bin[i]);
 
     // Update the decimal value by multiplying it by 2 and adding the current digit
     decimal = decimal * 2 + digit;
   }
 
   return decimal;
 }
