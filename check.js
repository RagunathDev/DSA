
// function findmin(q, g) {
//    console.log("   q.concat(g)",   q.concat(g));
  
// }
// var q = [1,2] ,g = [3,4]
// findmin(q, g)

// function newFun(x) {
//    for (let i = 0; i < x.length; i++) {
//       // 
     
//       for (let j = 1; j < x.length; j++) {
//          // const element = x[j];
//          // console.log("element", x[j]);
//          if(x[i] !== x[j]){
//             console.log(x[j],"---ii");
//          }else{
//              console.log(x[j],"---iitt");
//             // return ;
//          }

    
//       }
//    }
// }

// // on this function is used to find a duplicates in one number
// function newFun(x) {
//    let result = 0;
//    for (let i = 0; i < x.length; i++) {
//       console.log(x[i]);
      
//       result ^= x[i]; // XOR cancels out duplicates
//    }
//    return result;
// }
// var a = [4,1,2,1,2];
// var b = [0,1,0,1,0,1,99]

// console.log(newFun(b));

// find the unique number use liner complexity and 0(n) space

function singleNumber(nums) {
  let ones = 0, twos = 0;

  for (let num of nums) {
   console.log(num,"lk");
   
    ones = (ones ^ num) & ~twos;
    console.log(ones,"---ones");
    
    twos = (twos ^ num) & ~ones;
    console.log("twos", twos);

    console.log("ones======++", ones);
    console.log("----------------");
    
  }


  return ones;
}
// var xc = [2,2,3,2];
var h = [0,1,0,1,0,8,7,8,7,1,99];

console.log(singleNumber(h));
// console.log(singleNumber(xc));
