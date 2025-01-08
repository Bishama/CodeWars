/* Move all exclamation marks to the end of the sentence */
function remove(string) {
    // Input: A string containing characters, including exclamation marks.
    // Output: A string with all exclamation marks moved to the end.
    // Example: "Hi! Hi!" -> "Hi Hi!!"
  
    // Remove all exclamation marks from the string.
    let exclRemoved = string.replaceAll('!', '');
  
    // Add the required number of exclamation marks at the end.
    let result = exclRemoved.padEnd(string.length, '!');
  
    return result;
  }
  