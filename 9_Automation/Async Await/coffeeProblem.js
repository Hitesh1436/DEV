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
        resolve(`${order} Served`)
    })
}

placeOrder('coffee').then(function(demand){
    console.log(demand)
    let orderIsProcessed = processOrder(demand)
    return orderIsProcessed
}).then(function(orderServed){
    console.log(orderServed)
}).catch(function(err){
    console.log(err)
})