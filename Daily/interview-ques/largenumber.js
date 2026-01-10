// Math Number Largest Value in Array
function big(arr){
 return Math.max(...arr)
}
const arr = [3, 5, 6, 7, 8, 9, 10];
console.log(big(arr));

// Without Built-in Function
function largest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[0],"--arr[0");
    
    if(arr[0] < arr[i]){
        max = arr[i];
    }
  }
  return max;
}
const array = [11, 3, 25, 5, 6,45, 7, 8, 9, 10];
console.log(largest(array));

// find the smallest number in array without built-in function
function smallest(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {

    if( min > arr[i]){
        min = arr[i];
    }
  }
  return min;
}
const array1 = [11,56, 3, 25, 5,67, 6, 7, 8, 9, 10];
console.log(smallest(array1));

// Find the largest string in an array based on length
function findLargestString(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > largest.length) {
      largest = arr[i];
    }
  }
  return largest;
}

const stringArray = ["apple", "banana", "cherry", "watermelon", "grapefruit"];
console.log(findLargestString(stringArray));

// want  a to z order big string
function sortStrings(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // Swap arr[i] and arr[j]
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const strings = ["banana", "apple", "cherry", "date", "zureoooo"];
console.log(sortStrings(strings));