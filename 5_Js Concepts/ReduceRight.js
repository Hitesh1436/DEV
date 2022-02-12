let arr = [2,3,4,5,6];

let sumFromRight = arr.reduceRight(function(acc,value){
    return acc+value;
},0)

console.log(sumFromRight)