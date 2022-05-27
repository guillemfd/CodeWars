//Complete the solution so that it reverses the string passed into it.

//'world'  =>  'dlrow'
//'word'   =>  'drow'

//v1
function reverse(string) {
  let reversedString = ''

  for (let i=string.length -1; i>=0; i--) {
    reversedString += string[i]
    // reversedString = reversedString + name[i]
  }
    return reversedString
}
console.log(reverse('guillem'))



//v2
function solution(str){
    return str.split('').reverse().join('');
  }