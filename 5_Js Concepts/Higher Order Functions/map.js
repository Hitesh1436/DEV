// Higher order functions are functions that operate on other functions,
//  either by taking them as arguments or by returning them. 
// In simple words,
//   A Higher-Order function is a function that receives a function as an argument
//    or returns the function as output.


let arr = [2,3,4,5,6,7,8,9,10];

//Map Function

let sqarr = arr.map(function squarer(v){
    return v*v;
})

// console.log(sqarr);

// console.log(arr);


let nameArr = ['Hitesh','Mrinal','Tania'];

// print names using the map function

let printArr = nameArr.map(function name(n){
     return n;
})

console.log(printArr)