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

// Fiboniacci Series make it clear
function fib() {
    const arr = [0,1];
    var element = null;
    var ty = 20;
    for (let i = 1; i < arr.length; i++) {
     element = arr[i] + arr[i];
     }
  arr.push(element)
  console.log(arr,"---jk");
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


// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// For example, 2 is written as II in Roman numeral, just two one's added together.
// 12 is written as XII, which is simply X + II.
// The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX.
function value(r) {
    if (r === 'I') 
        return 1;
    if (r === 'V') 
        return 5;
    if (r === 'X') 
        return 10;
    if (r === 'L') 
        return 50;
    if (r === 'C') 
        return 100;
    if (r === 'D') 
        return 500;
    if (r === 'M') 
        return 1000;
    return -1;
}

function romanToInt(s) {
    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = value(s[i]);

        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
        prevValue = currentValue;
    }
    return total;
}

var romanNumber2 = "MCMXCIV";
console.log(romanToInt(romanNumber2)); // Output: 1994
var romanNumber = "III";
console.log(romanToInt(romanNumber)); 
var romanNumber1 = "LVIII";
console.log(romanToInt(romanNumber1)); 

// This version adds two numbers represented as linked lists (each node contains a single digit).
// It traverses both lists node by node, simulating digit-by-digit addition with carry, as in elementary math.
// The main difference from the array version is that you can't reverse or join a linked list directly;
// you must traverse node by node, handling carry and constructing the result as a new linked list.

//Q:  You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 
  function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }
    return dummy.next;
};

// Helper to convert array to linked list
function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    console.log("dummy.next", dummy.next);
    console.log("current", current);
    console.log("dummy", dummy);
    console.log("dummy.next.val", dummy.next.val);
    console.log("current.val", current.val);
    console.log("current.next", current.next);
    console.log("dummy.next.next", dummy.next.next);
  
    
    return dummy.next;
}

// Helper to convert linked list to array for display
function listToArray(node) {
    let arr = [];
    while (node) {
        arr.push(node.val);
        node = node.next;
    }
    return arr;
}

let l1 = arrayToList([2,4,3]);
let l2 = arrayToList([5,6,4]);

console.log(listToArray(addTwoNumbers(l1, l2))); 

let ll1 = arrayToList([0]), ll2 = arrayToList([0]);
console.log(listToArray(addTwoNumbers(ll1, ll2))); 

let lll1 = arrayToList([9,9,9,9,9,9,9]), lll2 = arrayToList([9,9,9,9]);
console.log(listToArray(addTwoNumbers(lll1, lll2))); 


function findDiagonalOrder(mat) {
  if (!mat || mat.length === 0) return [];

  const m = mat.length, n = mat[0].length;
  console.log(m, n),"3232";
  
  const result = [];
  let row = 0, col = 0, direction = 1; // 1 = up, -1 = down

  for (let i = 0; i < m * n; i++) {
    console.log("mat[row][col]", mat[row][col]);
    
    result.push(mat[row][col]);
console.log(  result.push(mat[row][col]),"  result.push(mat[row][col]);");

  
  }


  return result;
}


// console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]])); 
// [1,2,4,7,5,3,6,8,9]

console.log(findDiagonalOrder([[1,2],[3,4]])); 
// [1,2,3,4]

