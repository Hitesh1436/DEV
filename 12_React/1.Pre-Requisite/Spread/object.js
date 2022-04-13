let obj = {
    name : 'Adam',
    address : {
        country : 'USA',
        state : {
            stateName : 'New York',
            pincode : 12345
        }
    }
}

let obj2 = {...obj,address : {...obj.address,state : {...obj.address.state}} }   // shallow copy 

obj.name = 'Hitesh'  // obj mn change hua bas obj2 mn ni 

obj.address.country = 'INDIA'  // pr isse dono mn change hogya jo ni chaiye tha 
// hume nested object ke liye nested spread use krna hoga 

// let obj2 = JSON.parse(JSON.stringify(obj))  // deep copy

obj.address.state.pincode = '88888'

console.log(obj)
console.log(obj2)