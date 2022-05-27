//Write a function called repeatStr which repeats the given string string exactly n times.

//repeatStr(6, "I") // "IIIIII"
//repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


//v1
function repeat(n, string) {
  let repeatedString = ''
  for (let i=0; i<n; i++) {
    repeatedString += string
  }
  return repeatedString
}

console.log(repeat(5, 'Guillem'))




//v2
function repeatStr (n, s) {
    let multiString = ''
    for(let i = 0; i < n; i++)
      multiString += s
    return multiString;
  }