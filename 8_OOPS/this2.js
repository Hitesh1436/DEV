// Node  + strict

'use strict'   // isse hmra strict mode hota h ab


//global -

// console.log(this)   // empty object milega


// function f(){  
//        console.log(this)   // undefined dega 
// }

// f()


// let obj = {
//        name : 'Rahul',

//        f: function(){
//               console.log(this)  // object milega 
//        }
// }

// obj.f()



let obj2 = {
       name :'Mrinal',

       f: function f(){
              function g(){
                     console.log(this)  // undefined dega 
              }

              g();
       }
}


obj2.f()