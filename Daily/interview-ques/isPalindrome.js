function isPalindrome(str) {
  if (str === "") return true;

  let s = str.toLowerCase();
  let start = 0;
  console.log(s.length);
  
  let end = s.length - 1;

  while (start < end) {
    console.log(start, end ,"---op");
    console.log(s[start], "--start");
         console.log(s[end], "--1");
    if (s[start] !== s[end]) {
        console.log(s[start], "--");
         console.log(s[end], "--1");
      return false;
    }
    start++;
    end--;
  }

  return true;
}


console.log(isPalindrome("Masasuasam")); // true
// console.log(isPalindrome("Hello")); // false
// console.log(isPalindrome("")); // true

// bult-in function to check palindrome number
function isPalindromeNumber(num) {
    let str = num.toString().split('').reverse().join('');
    return str === num.toString();
}
// console.log(isPalindromeNumber("Madam"),"op");

// without built-in function to check palindrome
function isPalanDrome(str){
      if (str === "" || str.length === 1) return true;

    let a = 0;
    let b = str.length - 1;
let left = str[a];
let right = str[b];

    while(a < b){
        
        if(left >= 'A' && left <= 'Z' ){
            left = String.fromCharCode(left.charCodeAt(0) + 32) 
        }
         
        if(right >= 'A' && right <= 'Z' ){
            right = String.fromCharCode(right.charCodeAt(0) + 32) 
        }
        
        if(left !== right){
            return false;
        }
        
        a++;
        b--
    }
    return true;
}
let str = "rar"
console.log("Try programiz.pro", isPalanDrome(str));