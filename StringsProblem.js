STRINGS
-------

 1.⁠ ⁠Reverse String
 2.⁠ ⁠Reverse Words in Sentence
 3.⁠ ⁠Palindrome Check
 4.⁠ ⁠Valid Palindrome (ignore spaces/special chars)
 5.⁠ ⁠Character Frequency
 6.⁠ ⁠First Non-Repeating Character
 7.⁠ ⁠Remove Duplicate Characters
 8.⁠ ⁠Check Anagram
 9.⁠ ⁠Longest Common Prefix
10.⁠ ⁠Most Frequent Character
11.⁠ ⁠String Compression
12.⁠ ⁠Check String Rotation
13.⁠ ⁠Longest Substring Without Repeating Characters
14.⁠ ⁠Reverse Only Vowels
15.⁠ ⁠Generate All Substrings



// 1. Reverse String
// Write a function that reverses a string.

let Input = "apple"
// Input.split('').reverse().join('');

function reverseStr(arr){
let left = 0, right = arr.length - 1;
   while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++, right--;
   }
return arr
}
function customSplit(str){
        const Arrs = [];
  for(let i =0; i < str.length; i++){

          Arrs[Arrs.length] = str[i]

  }
  return Arrs;
}
function customJoin(arr){
let res = "";
for(let i = 0; i < arr.length; i++){
  res += arr[i]
}
return res;
}
let checks = customSplit(Input);
// console.log(checks,"ooo-1")
let reverse = reverseStr(checks);
// console.log(reverse,"ooo-2")
let CJoins = customJoin(reverse);
console.log(CJoins,"Q-1")
// Output: "elppa"

// 2.Reverse Words in Sentence
// Reverse the order of words in a given sentence, maintaining the spacing.

let InputRev = "The quick brown fox"
InputRev.split(' ').reverse().join(' ')

//Output: "fox brown quick The"

// 3. Palindrome Check
// Check if a string reads the same forwards and backwards.

let Input3 = "racecar"
function Palindrome(inp){
 if(inp.split('').reverse().join('') === inp){
      return true
 }else{
  return false  
}
}
Palindrome(Input3);

// Output: true

// 4. Valid Palindrome (ignore spaces/special chars)
// Determine if a string is a palindrome after converting all uppercase letters to lowercase and removing all non-alphanumeric characters.

let Input4 = "A man, a plan,a canal: Panama"
function validPalind(arr){
 let value = arr.toLowerCase().replace(/[^a-zA-Z0-9]/g,'')
 let test = value.split('').reverse().join('')
 if(value === test){
    return true; 
  }else{
    return false;
  }
}
console.log(validPalind(Input4));
// Output: true
// 5. Character Frequency
// Count how many times each character appears in a string.

let Input5 = "hello"
function charFreq(arr){

// let res = {};
// for(let str of arr){
//   res[str] = (res[str] || 0) + 1
// }
// return res;

let oi = arr.split('').reduce((acc, val)=>{
       acc[val] = (acc[val] || 0) + 1
      return  acc
   },{});
return  oi
}
charFreq(Input)
// Output: { h: 1, e: 1, l: 2, o: 1 }

// 6. First Non-Repeating Character
// Find the first character in a string that does not appear anywhere else in the string.

let Input6 = "swiss"
function FirstNonRepeatingCharacter(str){
  let freqMap = {};
    for(let num of str){
       freqMap[num] = (freqMap[num] || 0) + 1
    }
    for(let char of str){
      // console.log( char,"gffd", freqMap[char])
        if(freqMap[char] === 1){
            return char
        }
  }
   return null;
}
FirstNonRepeatingCharacter(Input6);
// Output: "w"

// 7. Remove Duplicate Characters
// Return a string with all duplicate characters removed, keeping only the first occurrence of each character.

let Input7 = "programming"

function removeDup(str){
let res = [];
   for(let num of str){
        if(!res.includes(num)){
              res.push(num)
             }

    }
return res.join('')
}
console.log(removeDup(Input7))
// Output: "progamin"

// 8. Check Anagram
// Determine if two strings contain the exact same characters in the exact same quantities.

function checkAna(str1, str2){
let res = [];
let left = str1.length;
let right = str2.length;
  if(left === right){
      for(let val of str2){
           if(str1.split('').includes(val)){
                   res.push(val)
              }
      }

      if(res.length  === left){
         return true
     }
  } 
return false
}
let Input8 = "aab", Input81 = "abb"
checkAna(Input8, Input81)

// Output: true

function checkAnaOptimized(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freqMap = {};

  // 1. Count frequencies for the first string
  for (let char of str1) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  // 2. Subtract frequencies using the second string
  for (let char of str2) {
    // If the character doesn't exist in the map, or drops below 0, it's not an anagram
    if (!freqMap[char]) {
      return false;
    }
    freqMap[char]--;
  }

  return true;
}

console.log(checkAnaOptimized("aab", "abb")); // Output: true
console.log(checkAnaOptimized("listen", "silent"));   // Output: false

// 9. Longest Common Prefix
// Find the longest common prefix string amongst an array of strings.

let Input9 = ["flower", "flow", "flight"]
function logestCommonPrefix(strs){
 if(strs.length === 0) return ''
  let first = strs[0];
  let last = strs[strs.length - 1];
  let prefix = ''

    for(let i = 0; i < first.length; i++){
       if(first[i] === last[i]){
            console.log(first[i],"--first")
            prefix += first[i]
        }else{
            break;
       }

    }
   
    return prefix;            
}
logestCommonPrefix(Input9);
// Output: "fl"

// 10. Most Frequent Character
// Find the character that appears the highest number of times in a string.

let  Input10  = "javascript"
   function mostFreqCha(arr){
      let res = {};
      let mac = 1
      let sty = ''
    for(let sts of arr){
      res[sts] = (res[sts] || 0) + 1;
    }
     for(let ma in res){
          if(res[ma] > mac){ 
               mac = res[ma];
               sty = ma
           }
        
       }
     return sty
   }
  console.log(mostFreqCha(Input10))
// Output: "a"

const numericObject = { 70: 'a', };

console.log(Object.keys(numericObject));
// Output: ["b", "c", "a"] (since keys are ordered 10, 30, 70)

// 11. String Compression
// Compress a string by replacing consecutive repeating characters with the character followed by its count.

let Input11 = "aabcccccaaa"
 
function strCom(arr){
let  freq = [];
let compressed = '';
let count  = 1;
// freq[nums] = (freq[nums]|| 0) + 1;
  for(let i = 0; i < arr.length; i++){
      if(arr[i] === arr[i + 1]){ 
         count++
      }else{
         compressed += arr[i] + count

          count = 1
      }

    }

  return compressed.length < arr.length ? compressed : arr
}
console.log(strCom(Input11))
// Output: "a2b1c5a3"
// Check String Rotation
// Check if one string is a rotated version of another string.
function checkStringRot(v1, v2){
// return v1.includes(v2) 
let ggg = ''
for(let str of v2){
          if(v1+v1.includes(str)) ggg += str
 }
// for(let i = 0; i < )
return ggg.length < v2.length ? false : true
}
let Input12 = "watoberttle" 
 let Inpu12 = "erbottlewat"
checkStringRot(Input12, Inpu12)

// function checkStringRot(v1, v2) {
  // 1. If lengths don't match, they cannot be rotations of each other
  // if (v1.length !== v2.length) {
  //   return false;
  // }

  // 2. Double the first string and check if v2 is inside it
//   let doubledString = v1 + v1;
//   return doubledString.includes(v2);
// }

// let Input12 = "waterbottle";
// let Inpu12 = "erbottlewat";

// console.log(checkStringRot(Input12, Inpu12)); // Output: true
// console.log(checkStringRot("abc", "cba"));    // Output: false


// Output: true


// 13. Longest Substring Without Repeating Characters
// Find the length of the longest continuous substring that has no duplicate characters.

 let Input13 = "pwwkew"
function LongestSubstring(str) {
  let maxLength = 0;
  let currentWindow = [];
  let longestString = ""; // Variable to hold the actual longest word

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    while (currentWindow.includes(char)) {
      currentWindow.shift(); 
    }

    currentWindow.push(char);

    // If we found a new longest window, save its contents as a string
    if (currentWindow.length > maxLength) {
      maxLength = currentWindow.length;
      longestString = currentWindow.join(''); // Join the array into a string
    }
  }

  return currentWindow; // Returns "wke"
}

console.log(LongestSubstring("pwwkew")); // Output: "wke"

console.log(LongestSubstring(Input13));    // Output: 3 ("abc")
console.log(LongestSubstring("pwwkew"));   // Output: 3 ("wke")
console.log(LongestSubstring("bbbbb"));    // Output: 1 ("b")
   // Output: 3 ("abc")
   // Output: 1 ("b")
// Output: 3 (Because the longest valid substring is "abc")


// 14. Reverse Only Vowels
// Given a string, reverse only all the vowels in the string and return it.





let Input14 = "leetcode";



 // Output: "leotcede"
 //leotcede
function reverseIny(arr1){
      let res = 'aeiouAEIOU';
      let left = 0;
      let right = arr1.length - 1
      let arr = arr1.split('')
      while(left < right){
      // If the left character is not a vowel, move the left pointer forward
              if (!res.includes(arr[left])) {
                  left++;
              } 
              // If the right character is not a vowel, move the right pointer backward
              else if (!res.includes(arr[right])) {
                  right--;
              } 
              // If both are vowels, swap them and move both pointers
              else {
                  [arr[left], arr[right]] = [arr[right], arr[left]];
                 left++;
                  right--;
              }


     
      }
  return arr.join('');
}
reverseIny(Input14)
