/*
  Multi-tap Keypad Press Counter

  Simulate SMS typing on old mobile phones with a 3x4 keypad.
  Count the number of button presses needed to type a given phrase
  using the multi-tap method.

  Input: A string (letters, digits, *, #, and spaces)
  Output: Total number of key presses required

  Example:
  presses("WHERE R U") ➞ 13
*/


function presses(phrase) {
  const keypad = {
    '1': ['1'],
    '2': ['a', 'b', 'c', '2'],
    '3': ['d', 'e', 'f', '3'],
    '4': ['g', 'h', 'i', '4'],
    '5': ['j', 'k', 'l', '5'],
    '6': ['m', 'n', 'o', '6'],
    '7': ['p', 'q', 'r', 's', '7'],
    '8': ['t', 'u', 'v', '8'],
    '9': ['w', 'x', 'y', 'z', '9'],
    '0': [' ', '0'],
    '*': ['*'],
    '#': ['#']
  };

  let totalClicks = 0;
  let lowerPhrase = phrase.toLowerCase();

  for (let char of lowerPhrase) {
    for (let key in keypad) {
      let index = keypad[key].indexOf(char);
      if (index !== -1) {
        totalClicks += index + 1; // because index starts at 0
        break;
      }
    }
  }

  return totalClicks;
}
