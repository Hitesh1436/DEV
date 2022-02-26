// Filter----->
// * Filter returns a new array containing array elements that matches a specified condition
// if the condition stands true it will filter out those elements and will presemt them in a new 
// Array

let arr = [2,3,5,7,9,10,12,18];

// We need to take out all even numbers
// agr map use krte toh kuch jgh undefined aata 

let evenNoArr = arr.filter(function(n){ 
    if(n%2==0){
        return true;
    }else{
        return false;
    }
});

// console.log(evenNoArr);



const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]


    let profitArr = transactions.filter(function(n){
        if(n>0){
            return true;
        }else{
            return false;
        }
    })

    // console.log(profitArr);


