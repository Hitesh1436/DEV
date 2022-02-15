// let myPromise = new Promise(function(resolve,reject){
//     // hmra code ayga yahan 
// })


let promise = new Promise(function(resolve,reject){
    const a =4;
    const b = 2;

    if(a===b){
        resolve('Yes values are equal');
    }else{
        reject('No values are not equal');
    }
});

promise.then(function(data){
    console.log('Result is coming from Resolved Mehtod ->' + data);
});

promise.catch(function(err){
    console.log('Result is coming from Reject Mehtod ->' + err)
});