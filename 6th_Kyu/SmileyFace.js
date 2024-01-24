/* 
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
    let eye = [';', ':'];
    let nose = ['-', '~'];
    let smile = ['D', ')'];
    let res=0
    
    for (let i=0; i<arr.length; i++){
      let face = arr[i]
      //Check with faces without nose
      if(face.length == 2 && eye.includes(face[0]) && smile.includes(face[1]) ){
        res+=1
      }
      //Check faces with nose
      if(face.length == 3 && eye.includes(face[0]) && nose.includes(face[1]) && smile.includes(face[2]) ){
        res+=1
      }
      }
    return res
  }
  
  countSmileys([':D',':~)',';~D',':)'])