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
        console.table([{ currentMergedList: listToArray(dummy.next).join(',') }]);
    }

    if (list1 !== null) {
        console.table([{ message: "Appending remaining list1 to merged list" }]);
        current.next = list1;
    } else {
        console.table([{ message: "Appending remaining list2 to merged list" }]);
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