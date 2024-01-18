/* 
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.
*/

function queueTime(customers, n) {
    //Parameters => array of integers, integer
    //Result => integer
    
    //Create array equal to the length of number of tills and set values equal to 0
    const tills = Array(n).fill(0);
    //Assign customer to the till with lowest time
    for (let time of customers){
      //Index of the till with lowest time
      let minTillIndex = tills.indexOf(Math.min(...tills))
      //Add customer time to the till to which we added the current customer
      tills[minTillIndex]+=time
    }
    //Find the till with maximum time
    return Math.max(...tills)
    
  }
  
  queueTime([1,2,3,4], 5)