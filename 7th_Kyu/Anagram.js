// write the function isAnagram
var isAnagram = function(test, original) {
    let t = test.toLowerCase().split('').sort().join('');
    let o = original.toLowerCase().split('').sort().join('');
    return t==o? true:false;
  };