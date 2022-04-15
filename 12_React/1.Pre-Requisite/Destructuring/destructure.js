// Array 

let arr = ['Hi', 'I', 'am', 'Hitesh'];

// let a = arr[1]  // I
// let b = arr[0]  // Hi


// Destructuring 
// sequence matter krta h isme hmesha yadd rkhna
let [a, b, c, d, e = 'and now', f = 'bye'] = arr

// console.log(a,b,c,d,e,f)


// Objects 

// let obj = {
//     name : 'Adam',
//     state : 'New York',
//     pincode : 12345
// }

// // for object hmesha keys ka name pass krna h

// let{name,state,pincode} = obj    // yhn name se phle state dene se bhi frk ni pdega bas console mn jruri h sequence

// console.log(name,state,pincode)


// Nested Objects

let obj = {
    name: 'Adam',
    address: {
        country: 'USA',
        state: {
            stateName: 'New York',
            pincode: 12345
        }
    }
}

let { name } = obj

let { address: { state: { pincode } } } = obj

let { address: { country: cd } } = obj  // esa krskte hn jse country ko cd khdia aur cd ko console log krdia 

console.log(cd)

console.log(pincode)

console.log(name)

