
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