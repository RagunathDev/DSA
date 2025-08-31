
// function findmin(q, g) {
//    console.log("   q.concat(g)",   q.concat(g));
  
// }
// var q = [1,2] ,g = [3,4]
// findmin(q, g)

function newFun(x) {
   for (let i = 0; i < x.length; i++) {
      // console.log(x[i],"----console.log(x[i]);");
     
      for (let j = 0; j < x.length; j++) {
         // const element = x[j];
         // console.log(element, x[i]);
         
         if( x[i] !==  x[j]){
           console.log(x[i] ,"o0o", x[j]);
      }
      }
   }
}
var a = [4,2,1,1,2];
newFun(a);