/* A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. Each book has a code of at least 3 characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code is followed by a space and by a positive integer, which indicates the quantity of books of this code in stock.

Task
You will receive the bookseller's stocklist and a list of categories. Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists. */

function stockList(books, categories) {
    //P => list of codes and quantity, list of categories
  //R => string containing category: no.ofbooks
  if(books.length === 0 || categories.length === 0) return "";
  
  let dict = {}
  
  for(let i=0; i<books.length; i++){
    let category = books[i][0]
    let qty = parseInt(books[i].split(' ')[1])
    
    if(!dict[category]) {
      dict[category] = qty
    } else {
      dict[category] += qty
    }
  }
  let res = categories.map((cat) => {
    return `(${cat} : ${dict[cat] || 0})`
  }
  ).join(' - ')
  console.log(res)
  return res
}