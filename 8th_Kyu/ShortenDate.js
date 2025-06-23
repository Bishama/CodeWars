function shortenDate(dateStr) {
  return dateStr.split(',')[0];
}

// Example
console.log(shortenDate("Friday May 2, 7pm")); // Output: "Friday May 2"
