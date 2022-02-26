// Higher order functions are functions that operate on other functions,
//  either by taking them as arguments or by returning them. 
// In simple words,
//   A Higher-Order function is a function that receives a function as an argument
//    or returns the function as output.


// let arr = [2,3,4,5,6,7,8,9,10];

// //Map Function

// let sqarr = arr.map(function squarer(v){
//     return v*v;
// })

// // console.log(sqarr);

// // console.log(arr);


// let nameArr = ['Hitesh','Mrinal','Tania'];

// // print names using the map function

// let printArr = nameArr.map(function name(n){
//      return n;
// })

// console.log(printArr)


let nameArr = ['Vishal Kumar' , 'Vaibahv Rawal' , 'Anmol Taneja'];


// You have to use map function and you will take out firstName and lastName separately

let modifiedArray = nameArr.map(function(n){
    let partOfName = n.split(' ');
    return partOfName;
})

// console.log(modifiedArray)


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];  // dollar mn h mnlo ab Rs mn convert krrhe hn bas 
const inrtToUsd = 74;


let transactioninRs = transactions.map(function(n){
    return n*inrtToUsd;
})

// console.log(transactions)

console.log(transactioninRs)