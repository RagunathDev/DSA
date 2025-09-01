
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

// on this function is used to find a duplicates in one number
function newFun(x) {
   let result = 0;
   for (let i = 0; i < x.length; i++) {
      result ^= x[i]; // XOR cancels out duplicates
   }
   return result;
}
var a = [4,1,2,1,2];
// var b = [2,3,2,3,4,4,5] 
// newFun(a);
console.log(newFun(a));
