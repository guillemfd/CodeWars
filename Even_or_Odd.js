// /*
//  * Function to check whether the given number is Even or Odd.
//  * @params = integer number
//  * @return = returns "Even" if the number is even "Odd" otherwise.
//  */



//v1
function evenOdd(number) {
  if ( number %2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
}
console.log('V1')
console.log(evenOdd(2))
console.log(evenOdd(3))
console.log('V1')








//v2
function even_or_odd(number) {
    if (number%2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

console.log('V2')
console.log(even_or_odd(2))
console.log(even_or_odd(3))
console.log('V2')