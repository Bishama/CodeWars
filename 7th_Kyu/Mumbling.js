/* accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */


function accum(s) {
	// P -> string
  // R -> String
 
  //Split the string
  let spl = s.split('');
  console.log(spl);
  
  //Map
  return spl.map((c,i)=> c.toUpperCase()+c.toLowerCase().repeat(i) ).join('-')
}