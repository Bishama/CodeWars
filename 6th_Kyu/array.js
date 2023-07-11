/* You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).*/

function isValidWalk(walk) {
    if (walk.length !== 10) {
      return false; // The walk must consist of exactly 10 steps
    }
  
    // Count the number of steps in each direction
    let nSteps = 0;
    let sSteps = 0;
    let eSteps = 0;
    let wSteps = 0;
  
    for (let i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n':
          nSteps++;
          break;
        case 's':
          sSteps++;
          break;
        case 'e':
          eSteps++;
          break;
        case 'w':
          wSteps++;
          break;
      }
    }
  
    // Check if the number of steps in each direction is equal
    if (nSteps === sSteps && eSteps === wSteps) {
      return true;
    } else {
      return false;
    }
  }