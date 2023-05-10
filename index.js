/*
Can you solve this problem  bracket pattern: Have the function RemoveBrackets(str) take the str parameter being passed, which will contain only the characters "(" and ")", and determine the minimum number of brackets that need to be removed to create a string of correctly matched brackets. For example: if str is "(()))" then your program should return the number 1. The answer could potentially be 0, and there will always be at least one set of matching brackets in the string.

String Challenge: Have the function StringChallenge(str) take the str parameter being passed and determine if it is possible to create a palindromic string of minimum length 3 characters by removing 1 or 2 characters. For example: if str is "abjchba" then you can remove the characters jc to produce "abhba" which is a palindrome. For this example your program should return the two characters that were removed with no delimiter and in the order they appear in the string, so jc. If 1 or 2 characters cannot be removed to produce a palindrome, then return the string not possible.

If the input string is already a palindrome, your program should return the string palindrome. Your program should always remove the characters that appear earlier in the string. In the example above, you can also remove ch to form a palindrome but jc appears first, so the correct answer is jc.

The input will only contain lowercase alphabetic characters. Your program should always attempt to create the longest palindromic substring by removing 1 or 2 characters (see second sample test case as an example). The 2 characters you remove do not have to be adjacent in the string.
Examples
Input: "mmop"
Output: not possible
Input: "kjjjhjjj"
Output: k

*/

function RemoveBrackets(str) {
  const stack = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i);
    if (c === '(') {
      stack.push(c);
    } else if (c === ')') {
      if (stack.length === 0) {
        count++;
      } else {
        stack.pop();
      }
    }
  }
  return count + stack.length;
}

// function StringChallenge(str) {
//   if (isPalindrome(str)) {
//     return "palindrome";
//   }
//   let left = 0, right = str.length - 1;
//   while (left < right) {
//     if (str.charAt(left) !== str.charAt(right)) {
//       const substr1 = str.substring(0, left) + str.substring(left + 1);
//       const substr2 = str.substring(0, right) + str.substring(right + 1);
//       if (isPalindrome(substr1)) {
//         return str.charAt(left) + "";
//       } else if (isPalindrome(substr2)) {
//         return str.charAt(right) + "";
//       } else {
//         return "not possible";
//       }
//     }
//     left++;
//     right--;
//   }
// }



// function isPalindrome(str) {
//   let left = 0, right = str.length - 1;
//   while (left < right) {
//     if (str.charAt(left) !== str.charAt(right)) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }
