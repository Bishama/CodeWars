/* Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. you can assume that the input data is always a non empty string, no need to verify it. */

function remove (string) {
    return string.replaceAll('!','')+'!'
  }