
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

// function singleNumber(nums) {
//   let ones = 0, twos = 0;

//   for (let num of nums) {
//    console.log(num,"lk");
   
//     ones = (ones ^ num) & ~twos;
//     console.log(ones,"---ones");
    
//     twos = (twos ^ num) & ~ones;
//     console.log("twos", twos);

//     console.log("ones======++", ones);
//     console.log("----------------");
    
//   }


//   return ones;
// }
// var xc = [2,2,3,2];
// var h = [0,1,0,1,0,8,7,8,7,1,99];

// console.log(singleNumber(h));
// console.log(singleNumber(xc));

// var findClosest = function(x, y, z) {
//     let ol = 0;
//     let oy = 0;
//     for(i = x;  i <= z; i++){
//       console.log(x,"-----1");
//        ol++;
//     };
//     for(i = y;  i < z; i--){
//        oy++;
//       console.log(y,"-----1");
//     };
 
// };

// console.log(findClosest( x = 2, y = 7, z = 4));

// function outer() {
//   let count = 0;
     
//   return function inner() {
//     count++;
//     console.log(count);

//     if (1 > 0.5) {
//         var x = 1;
//         } else {
//         var x = 2;
//         }
//      console.log(x,"--i");
//   };


// }

// const fn = outer();
// fn();
// fn();
// fn();

if (Math.random() > 0.5) {
   var x = 1;
} else {
  var x = 2;
}
console.log(x); // ReferenceError: x is not defined

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
console.log(add5(2) );

// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

function makeAdder2(x) {
    var o = 10;
return function (y) {
    var o = 1;
    return x + y + o;
  };
}

// const add25 = makeAdder2(5);
// console.log(add25(2) );
// const add10 = makeAdder2(10);
// console.log(add10(3));

// function makeAdderop() {
//     for (var i = 1; i <= 3; i++) {
//          console.log(i,"--0")
//       setTimeout(() => console.log(i), 1000);
    
    // }
    // for (var i = 1; i <= 3; i++) {
    //     (function (i) {
    //         setTimeout(() => console.log(i,"--1"), 1000);
    //     })(i);
    // }
// }

// console.log( makeAdderop() ,"-- makeAdderop() ");
// function debounce(fn, delay) {
//   let timer;

//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }

// const search = debounce((text) => {
//   console.log("API call for:", text);
// }, 500);

// // simulate typing
// search("r");
// search("ra");
// // search("raghu");

// function demo(...args) {
//   console.log("Received:", args);
// }

// demo(10, 20, 30);
// function demo(a, b, ...args) {
//   console.log(a, b, args);
// }

// demo(1, 2, 3, 4, 5);
