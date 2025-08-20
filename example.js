var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    var k = 1; // Start with the first element
    for (var i = 1; i < nums.length; i++) {
        console.log(i,"ioi");
         console.log(nums[i], "----------lokesh", nums[k] ,"nums[i - 1]", nums[i - 1])
        if (nums[i] !== nums[i - 1]) {
           console.log("k",k);
console.log("nums[k]",nums[k]);
console.log("nums[i]",nums[i]);
            console.log("nums[k+1]",nums[k+1]);

   
            
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

var nums = [0,0,1,1,1,2,2,3,3,4];
var newLength = removeDuplicates(nums);
console.log(newLength); 

