const fs = require('fs')

// CallBack Function :- any function that is  passed as an argument to another function 


// function printFirstName(firstName,cb,cb2){
//     console.log(firstName)
//     cb('Chauhan')
//     cb2(24)
// }

// function printLastName(lastName){
//     console.log(lastName)
// }

// function printAge(age){
//     console.log(age)
// }

// printFirstName('Hitesh',printLastName,printAge)  // printLastName is passed as an argument here 
// // printLastName('Chauhan')



// Synchronous way of reading file

// console.log('before')

// let data = fs.readFileSync('f1.txt')

// console.log(' ' + data)

// console.log('after')


// Asynchronous way of reading file

console.log('before')

fs.readFile('f1.txt',cb1)

fs.readFile('f2.txt',cb2)

function cb1(err,data){
    if(err){
        console.log(err);
    }else{
        console.log('' + data);
    }
}
function cb2(err,data){
    if(err){
        console.log(err);
    }else{
        console.log('' + data);
    }
}

console.log('after');

