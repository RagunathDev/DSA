// Methods to check if a number is a isPalindromelindrome
// A palindrome is a number that remains the same when its digits are reversed.
// For example, 121, 989, and 12321 are palindromes.
// The following functions check if a number is a palindrome in different ways.
// The functions convert the number to a string, reverse it, and compare it with the original number.

// 1. Using string manipulation
function isPalindrome(xs) {
    var y = xs.toString();
    var strrev = y.split('').reverse().join('');
    return strrev === y;    
}
var test = isPalindrome(989);
console.log(test); // true

// 2. Using a simple comparison
function isPalindrome1(xs) {
    return xs === +xs.toString().split('').reverse().join('') ;
}

var testOne = isPalindrome1(9889);
console.log(testOne); // true

// 3. Using Number conversion
function isPalindromeNumber(xs) {
    return xs === Number(xs.toString().split('').reverse().join('')) ;
}

var testNumber = isPalindromeNumber(9889);
console.log(testNumber); // true

// Fiboniacci Series   
function fib() {
    const arr = [0,1];
    var element = null;
    for (let i = 1; i < arr.length; i++) {
     element = arr[i] + arr[i];
     }
  arr.push(element)
  console.log(arr);
  
}

fib();

// Search Insert Position
// Given a sorted array and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
     let mid = Math.floor((left + right) / 2);
     console.log(mid, "89");
     
     if (nums[mid] === target) {
            return mid; 
        } else if (nums[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    return left;
}
var nums = [1,3,5,6], target = 5
var target1 = 2
var target2 = 7
console.log(searchInsert(nums, target))
console.log(searchInsert(nums, target1))
console.log(searchInsert(nums, target2))


// Longest Common Prefix// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example: Input: strs = ["flower","flow","flight"], Output: "fl"
// If the input is an empty array, return an empty string.// If all strings are the same, return the first string.// If the first string is empty, return an empty string.
// The function should iterate through the characters of the first string and compare them with the corresponding characters of the other strings.
// If a mismatch is found, return the substring of the first string up to that point.
// If all characters match, return the first string as the common prefix.

const arr = ["flower", "flow", "flight"];

function commonPrefix(arr) {
    if (!arr.length) return "";

    for (let i = 0; i < arr[0].length; i++) {
        console.log(arr[0],"k");
        console.log(i,"--i")
        const char = arr[0][i];
         console.log(char,"k-1");
        for (let j = 1; j < arr.length; j++) {
            if (arr[j][i] !== char){
                return arr[0].substring(0, i);
            }
        }
    }

    return arr[0]; // All characters matched
}

console.log(commonPrefix(arr)); // Output: "fl"
