

const lib = require('./lib')

let amount = 2000
let tocut = 200


// lib.updateAccount('Tv' , chargeDebitCard)

// cb agr jyda bar call krdia toh output mn 1800 fir 1600 ayga aur bda code hua toh kaise krenge

let promiseObj = lib.promiseUpdateFunction('Tv').then(chargeDebitCard())





function chargeDebitCard(){
       amount = amount-tocut
       console.log(`Remaining amount is ${amount}`)
}
// chargeDebitCard()