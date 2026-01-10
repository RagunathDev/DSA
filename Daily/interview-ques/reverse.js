// reverseString.js
// Built-in function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}
// MNC wantend to do without built-in function
function reverseString(str){
    let res = '';
    for(i = str.length - 1; i >= 0; i--){
        res += str[i]
      }
    return res;
}
var str = 'ragunath';
console.log("Try to reverse string:", reverseString(str) );
// Definition for singly-linked list.