let arr = [2,3,4,5,6];

// isme function mn 2 chiz pass krte hn ek accumulator and ek value
let addition = arr.reduce(function(sum,value){
        let updatedSum = sum + value;
        return updatedSum
},0)

console.log(addition)

let multiplication = arr.reduce(function(multiply,value){
    let updatedMultiply = multiply*value;
    return updatedMultiply 
},1)

console.log(multiplication)


