function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;
    console.table([{ message: "Starting merge process..." }]);

    while (list1 !== null && list2 !== null) {
        console.table([{ list1Val: list1.val, list2Val: list2.val }]);
        if (list1.val < list2.val) {
            console.table([{ chosen: `Choosing list1.val: ${list1.val}` }]);
            current.next = list1;
            list1 = list1.next;
        } else {
            console.table([{ chosen: `Choosing list2.val: ${list2.val}` }]);
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
        // console.table([{ currentMergedList: listToArray(dummy.next).join(',') }]);
    }

    if (list1 !== null) {
        // console.table([{ message: "Appending remaining list1 to merged list" }]);
        current.next = list1;
    } else {
        // console.table([{ message: "Appending remaining list2 to merged list" }]);
        current.next = list2;
    }

    console.table([{ message: "Merge process completed." }]);
    return dummy.next;
};

// Helper function to convert array to linked list
function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    console.table([{ array: arr, message: "Array to List" }]);

    for (let num of arr) {
        console.table([{ number: num, message: "Number to Node" }]);
        current.next = new ListNode(num);
        current = current.next;
    }
    console.table([{ dummyNext: dummy.next }]);
    return dummy.next;
}

// Helper function to convert linked list to array
function listToArray(node) {
    console.table([{ node, message: "Node to Array" }]);

    let arr = [];
    while (node) {
        arr.push(node.val);
        node = node.next;
    }
    console.table([{ listToArray: arr }]);
    return arr;
}

let list1 = arrayToList([1, 2, 4]);
let list2 = arrayToList([1, 3, 4]);
console.table([{ finalMergedList: listToArray(mergeTwoLists(list1, list2)) }]);
    // explanation: The function `mergeTwoLists` merges two sorted linked lists into one sorted linked list. It uses a dummy node as the head of the merged list and iteratively compares the values


    // to find bettter result and optimized the function, we can use a while loop to iterate through both linked lists simultaneously. We compare the values of the current nodes in both lists and append the smaller one to the merged list.
var isNumber = function(s) {
    return /^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?$/.test(s.trim());
};

console.log(isNumber("0"));     // true
console.log(isNumber("e"));     // false
console.log(isNumber("."));     // false
console.log(isNumber("3.14"));  // true
console.log(isNumber("2e10"));  // true

/**
 * Find the smallest missing positive integer in an unsorted array.
 * Time: O(n), Space: O(1) auxiliary (in-place).
 */
function firstMissingPositive(nums) {
  const n = nums.length;

  // 1) Place each number in its correct position (if possible)
  for (let i = 0; i < n; i++) {
    // Place nums[i] at correct index nums[i] - 1, if within [1..n] and not already correct
    while (
      nums[i] >= 1 &&
      nums[i] <= n &&
      nums[nums[i] - 1] !== nums[i]
    ) {
      // Swap nums[i] with nums[nums[i] - 1]
      const correctIdx = nums[i] - 1;
      [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
    }
  }

  // 2) Identify the first position where the number isn't correct
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // If all positions are correct from 1..n, answer is n+1
  return n + 1;
}
console.log(firstMissingPositive([1, 2, 0]));          // 3
console.log(firstMissingPositive([3, 4, -1, 1]));      // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12]));  // 1


// find duplicate and remove÷
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    var k = 1; // Start with the first element
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            console.log(nums[i], "----------lokesh", nums[k] ,"nums[i - 1]", nums[i - 1])
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

var nums = [0,0,1,1,1,2,2,3,3,4];
var newLength = removeDuplicates(nums);
console.log(newLength); // Output: 2
console.log(nums.slice(0, newLength)); // Output: [1, 2]