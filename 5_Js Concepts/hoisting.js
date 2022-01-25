// Hoisting is the JavaScript interpreter’s action of moving all variable and function 
// declarations to the top of the current scope.

console.log(a);

greet()

var a=2

function greet(){
    console.log('Hello')
}