/* This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites 1,000 times. */

// add the value "codewars" to the websites array 1,000 times
var websites = []
const numberOfTimes = 1000;

for (let i = 0; i < numberOfTimes; i++) {
  websites.push("codewars");
}

console.log(websites);