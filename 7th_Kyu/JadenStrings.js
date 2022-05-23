/* Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" */

String.prototype.toJadenCase = function () {
    // p -> string
    // r -> string
    
    return this.split(" ").map(x => x[0].toUpperCase() + x.slice(1)).join(" ");
  };