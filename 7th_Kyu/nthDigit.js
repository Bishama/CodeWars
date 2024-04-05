/*Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1 */

function findDigit(num, nth){
    // Check if nth is not positive, return -1
    if (nth <= 0) return -1;

    // Convert num to absolute value to ignore the sign
    num = Math.abs(num);
    
    // Convert the number to a string
    let str = num.toString();
    
    // If nth is larger than the number of digits, return 0
    if (nth > str.length) return 0;
    
    // Find the nth digit from the right and return it as a number
    return parseInt(str[str.length - nth]);
}


