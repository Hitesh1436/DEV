
function placeOrder(drink){
    return new Promise(function(resolve , reject){
        if(drink === 'coffee'){
            resolve('Order For Coffee')
        }else{
            reject('Order Cannot Be Placed')
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('Oders is Being Processed')
        // resolve(`${order} Served`)  // template literal use kia h bas yhn 
        resolve(order + 'Served')
    })
}

// // Promisified Solution 
// placeOrder('coffee').then(function(demand){
//     console.log(demand)
//     let orderIsProcessed = processOrder(demand)
//     return orderIsProcessed
// }).then(function(orderServed){
//     console.log(orderServed)
// }).catch(function(err){
//     console.log(err)
// })


// Async Await Solution -- na jyda then use krna na itne function short krdeta h kfi code ko

async function serveOrder(){
    try{   // jb ese code ho jispr sure ni hain hum ki chlega ya ni toh usse hum TRY-CATCH ke andr rkhte hn
        let orderPlaced = await placeOrder('coffee');
        console.log(orderPlaced);
        let processedOrder = await processOrder(orderPlaced);
        console.log(processedOrder);
    } catch(error){
        console.log(error);
    }
}

serveOrder();