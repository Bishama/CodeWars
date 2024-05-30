/* Haskell has some useful functions for dealing with lists:

$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x
 */

// P => any order,num 
//R => return

function head(arr){
    return arr[0]
  }
  
  function last(arr){
    return arr[-1]
  }
  
  function tail(arr){
    return arr.slice(1)
  }
  
  function init(arr){
    return arr.slice(0,-1)
  }
  
  head([3,4,9,2]) // 3
  last([6,3,9,8]) // 8
  tail([3,9,8,4]) //[9,8,4]
  init([5,8,2,1]) //[5,8,2]