// function plusOne(arr) {
//  var ch = arr.pop() +1;
//  console.log(ch,"ch--");
 
//         arr.push(ch);
//              for (let i = 0; i < arr.length; i++) {
//             if(ch >= 9){
//                 var  y =  String(arr[i]).split('').map(Number);
//                 return y;
//              }else{
//                 return arr;
//              }
//            }
//         }



// var plusOne = function(digits) {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] < 9) {
//             digits[i]++;   
//             return digits;
//         }
//         digits[i] = 0; 
//     }
    
//    digits.unshift(1)
    
//     return digits;
// };

// var arr = [1,2,3];
// // var arr1 = [4,3,2,1];
// // var arr2 = [9];
// console.log(plusOne(arr));




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