/* When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

1, 10, 9, 12, 3, 4Then the whole pattern repeats. Hence the following method:

Multiply

the right most digit of the number with the left most number in the sequence shown above,
the second right most digit with the second left most digit of the number in the sequence.
The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.*/
const remainders = [1, 10, 9, 12, 3, 4];

function thirt(n) {
    const sum = n
      .toString()
      .split('')
      .reverse()
      .reduce( (a,b, index) => parseInt(a) + b*remainders[index%remainders.length] );

      return n === sum ? parseInt(n) : thirt(sum);
      
}