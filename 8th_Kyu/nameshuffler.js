/* Write a function that returns a string in which firstname is swapped with last name. */

function nameShuffler(str) {
    var nameParts = str.split(" ");
    var firstName = nameParts[0];
    var lastName = nameParts[1];
    nameParts[0] = lastName;
    nameParts[1] = firstName;
  
    var shuffledName = nameParts.join(" ");
  
    return shuffledName;
  }
  