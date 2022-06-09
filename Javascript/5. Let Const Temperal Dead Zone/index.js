// let and const declarations are Hoisted but differently than var
console.log(b) // undefined
// console.log(x) // Reference Error : x is not defined (because x was no where defined in our code)
// console.log(a) // RefernceError : cannot access a before initialization (a is defined but it is in a temporal dead zone so we can't access it)
var b =100 // in case of var , memory allocated inside the global object before execution of code
let a =10 // in case of let , memory  is allocated but in different/seperate space (in script) 
//before execution of code and we can't access it before putting any value in it

// Temporaal Dead zone is a time since when this let varibale was hoisted and till it is initialized with some value 
// the time between this is known as temporal dead zone

//if we write window.b/this.b in console then we get value 10 becasue our b is attached to window object
// But if we do window.a/this.a then it gives undefined because our a is not in global object as it is in a script (separate space)

// In case of let we cannot redeclared the same varibale in the same SCOPE
// console.log("hello") // Even this line will not run because of the error below.So js doesn't run a single line once it founds SyntaxError
// let a =10
// let a =100 // SyntaxError : Identifier 'a' has already been declared

// In case of const , it is also stored in Script ,in temporal dead zone but it is even more strict than let
// WE cannot declare a const and later initialized it . We have to declare and initialized it on same time/ together
// const z ; // SyntaxError : Missing initializer in const declaration
// z = 100

// const z =10;
// z = 100 ; // TypeError : Assignment to constant varibale.

// So to avoid the error casued due to temporal dead zone, always try to put
// your declarations and initilizations on the top.

// Try to observe the difference b/w refernceError , syntaxError, typeError


// Just checking can we update the array of a const variale
// const c = ["hello","Dabas"]
// c.push("Vishal")
// console.log(c); //[ 'hello', 'Dabas', 'Vishal' ]