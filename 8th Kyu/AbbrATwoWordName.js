function abbrevName(name){

    // code away
  let arr = name.split(" ");
  let result = arr[0][0] + '.' + arr[1][0];
  return result.toUpperCase();
}