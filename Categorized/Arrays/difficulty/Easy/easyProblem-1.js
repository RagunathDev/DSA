function plusOne(arr) {
 var ch = arr.pop() +1;
 console.log(ch,"ch--");
 
        arr.push(ch);
             for (let i = 0; i < arr.length; i++) {
            if(ch >= 9){
                var  y =  String(arr[i]).split('').map(Number);
                return y;
             }else{
                return arr;
             }
           }
        }



var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;   
            return digits;
        }
        digits[i] = 0; 
    }
    
   digits.unshift(1)
    
    return digits;
};

var arr = [1,2,3];
// var arr1 = [4,3,2,1];
// var arr2 = [9];
console.log(plusOne(arr));




function speNumber(n){
    var hi = n.toString().split('');
   var res = [];
    for (let i = 1; i < hi.length; i++) {
        const element = hi[i];
        //   console.log(hi[i],"oio");
        if(element.includes('0')){
        var k = n-1
        res.push(1, k)
    //    console.log("res--1", res);
            return res;
        }
    }

          
            var t = n / 4;
            // console.log(t,"-");

            var o =  parseInt(n-t);
            var tw = Math.round(t);
            // console.log(o ,"--", tw);
            res.push(o,tw)
            // console.log("res", res);
            return res;
        

//      console.log(i.toString().split(''));
    

}



// Integer with No Zero 
var getNoZeroIntegers = function(n) {
  const hasZero = x => x.toString().includes('0');

  for (let a = 1; a < n; a++) {
    const b = n - a;
    if (!hasZero(a) && !hasZero(b)) {
      return [a, b];
    }
  }
  // Problem guarantees a solution exists for n >= 2, but return a fallback just in case:
  return [];
};

// Example
console.log(getNoZeroIntegers(2));  // [1,1]
console.log(getNoZeroIntegers(11));
console.log(getNoZeroIntegers(69));


function sortBy(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}

// var a = 
console.log(sortBy(arr = [5, 4, 1, 2, 3], fn = (x) => x
), "---------------opop--1");

console.log(sortBy(arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x), "---------------opop--2");
console.log(sortBy(arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]), "---------------opop--3");

function generateParenthesis(n) {
  const result = [];

  function backtrack(current, open, close) {
    // If the current string is complete
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // Add an open parenthesis if we still have some left
    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    // Add a closing parenthesis if it doesn’t exceed the number of open ones
    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
}


console.log(generateParenthesis(3));
// Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]

console.log(generateParenthesis(1));


var cancellable = function(log, args, t) {
     const result = [];
     result.push({"time": log, "returned": fn(... args)});
     console.log(result,"oiooooo", t);
     
     return result;
}

var longestPalindrome = function(s) {
  const lp = [];
    for(i = 0; i < s.length; i++){
      console.log(lp.push(s[i]),"opo");
        if(s[0] === s[i]){
            lp.push(s[i]);
                return lp;
        }
     }
};

console.log(longestPalindrome(s),"--12334");

function makeCounter() {
  let count = 1;           // outer variable

  return function () {     // inner function (closure)
    count = count + 1;
    return count;
  };
}

const counter = makeCounter();
console.log("--p",counter());
console.log(counter())



function reverse(x) {
  let sign = x < 0 ? -1 : 1;
  let y = Math.abs(x).toString().split('').reverse().join('');
  let rev = sign * Number(y);

  // 32-bit range check
  if (rev < -(2 ** 31) || rev > (2 ** 31 - 1)) {
    return 0;
  }

  return rev;
}

console.log(reverse(-123));  // -321
console.log(reverse(123));   // 321
console.log(reverse(1534236469));


function validateCoupons(code, businessLine, isActive) {
  const validBusinessLines = [
    "electronics",
    "grocery",
    "pharmacy",
    "restaurant"
  ];

  const businessPriority = new Map(
    validBusinessLines.map((b, i) => [b, i])
  );

  const codeRegex = /^[a-zA-Z0-9_]+$/;
  const validCoupons = [];

  for (let i = 0; i < code.length; i++) {
    if (
      isActive[i] === true &&
      code[i].length > 0 &&
      codeRegex.test(code[i]) &&
      businessPriority.has(businessLine[i])
    ) {
      validCoupons.push({
        code: code[i],
        businessLine: businessLine[i]
      });
    }
  }

  validCoupons.sort((a, b) => {
    const priorityDiff =
      businessPriority.get(a.businessLine) -
      businessPriority.get(b.businessLine);

    if (priorityDiff !== 0) {
      return priorityDiff;
    }

    // STRICT ASCII lexicographical comparison
    if (a.code < b.code) return -1;
    if (a.code > b.code) return 1;
    return 0;
  });

  return validCoupons.map(c => c.code);
}
validateCoupons(
  ["MI","b_"],
  ["pharmacy","pharmacy"],
  [true,true]
);
