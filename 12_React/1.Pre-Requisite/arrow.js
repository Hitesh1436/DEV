// Write a function to add two numbers and print their sum(Function Expression)

// let sum = function(a,b){  // normal way h yh 
//     console.log(a+b)
// }
// sum(3,4)


// yh h arrow function  isme function keyword ka use ni krna hota

// let sum = (a,b)=>{   
//     console.log(a+b)
// }
// sum(3,4)

// yh bhi trika h jisme return statement ki jrurt ni pdti

// let sum = (a,b)=> a+b   
// console.log(sum(3,4))

// var regularFunction = function(name){
//     console.log(`I am ${name}`)
// }

// let arrowFunction = name=>{
//     console.log(`I am ${name}`)
// }

// regularFunction('Adam')

// arrowFunction('Steve')


let test = () => {
    console.log(this)  // {}- empty object bcz this ke pass kuch ni h toh hume {} mila
}
test()

let person = {
    name: 'Adam',
    age: 25,

    showDetails: function () {
        console.log(this.name + ' ' + this.age)
    },
    showDetailsArrow: () => {
        console.log(this.name + ' ' + this.age)  // this ka koi link ni h arrow function se so this use ni krenge
    }
}


// person.showDetails()
// person.showDetailsArrow()
// isme undefined milega bcz this empty h usme se kuch acces krege toh undefined hi ayga