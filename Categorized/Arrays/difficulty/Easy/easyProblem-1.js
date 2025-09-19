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



