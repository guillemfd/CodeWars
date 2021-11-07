// An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

// Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

// Some examples:

// There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]


const wordsArray = ["dell", "ledl", "abc", "cba"]

function anagramCounter (wordsArray) {
  
    let counter = 0
      for (let i=0 ; i<wordsArray.length ; i++) {
        const word = wordsArray[i].split("").sort().join("")
      for (let j=i+1 ; j<wordsArray.length ; j++) {
        if (wordsArray[j].split("").sort().join("") === word)
          counter++
        }
      }
    console.log('counter')
}


// function anagramCounter (wordsArray) {
// var counter = 0;
// var arrSorted = wordsArray.map(function(word) {
//     word = word.split('').sort().join('');
//     return word;
// })
// for (var i = 0; i < wordsArray.length; i++) {
//     for (var j = i; j < wordsArray.length; j++) {
//     if (arrSorted[i] === arrSorted[j + 1]) counter++
//     }
// }
// return counter