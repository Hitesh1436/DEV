//  In JavaScript, Hoisting is the default behavior of moving all the declarations 
// at the top of the scope before code execution. Basically, it gives us an advantage 
// that no matter where functions and variables are declared, they are moved to the top 
// of their scope regardless of whether their scope is global or local. 


// greet();

// console.log(a);
// var a = 10;   // var ke case mn undefined aya tha 
// // var ko execute krrhe hn uske declaration se phle toh undefined dega


// function greet() {
//        console.log("Hello");
// }
// but function ke sth esa ni hota usse upe ya niche khin execute kro declaration se phle vo output dega




greet();
console.log(a);

let a = 10;  // yhn error aaya ki a cannot be accessed before initialization
// a jbtk initialise ni hojata vo TDZ(temporal dead zone)
function greet() {
    console.log("Hello");
}

