//Given an array of integers your solution should find the smallest integer.

//For example:
//Given [34, 15, 88, 2] your solution will return 2
//Given [34, -345, -1, 100] your solution will return -345
//You can assume, for the purpose of this kata, that the supplied array will not be empty.

var arrList = [34, 15, 88, 2]

//V1
// class SmallestIntegerFinder {
//     findSmallestInt(arr) {
//             return arr.sort(function(a, b) {
//           return a - b;
//         })[0];
//     }
//   }



//V2
function SmallestIntegerFinder(arr) {
          return arr.sort(function(a, b) {
        return a - b;
      })[0];
  }

  console.log(SmallestIntegerFinder(arrList))