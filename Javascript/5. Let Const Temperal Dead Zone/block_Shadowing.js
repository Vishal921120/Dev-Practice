{ } // Block is defined by these curly brackets
{
    // Block is also known as compound statement
    // var a =19;
    // console.log(a);
    // So block is combining a multiple js statement in
    // a group
}

if (true) console.log("hello") // this code is perfectly fine
// but if want to run multiple js statement then we need to use a block
// if(true){
//     var a = 19
//     console.log("Ram")
// }

{
    var a = 10  // In ispect -> scope, a is hoiseted inside the global scope with value undefined before running the code
    let b = 20  // In inpect-> scope , b is hoisted inside block and assigned undefined before runing the code
    const c = 30 // In inpect-> scope , c is hoisted inside block and assigned undefined before runing the code
}
// console.log(b) // Refernce error : b is not defined
// that's why we get a statement that let and const are blocked scope
// when our code reaches line no. 21 means outside the block then we cannot access let and const now
// and our block scope also disappear from the inspect-> scope
// whereas we can access a outside block because it is inside the global object

// Very intersting point is coming here
// shadowing
var x = 10; // original
{
    var x = 20; // here our x is shodowed and now it value is 20
    console.log(x) // 20
}
console.log(x) // 20 , Why we are getting 20 here 
// Because both our original and inside the block x is pointing to the same memory location 
// which is inside the global object . So changes made during shadowing will remain even after the block ended.

// In case of let (similar case in const)
let g = 10; // defined inside the script area in inspect->scope
{
    // value of g is shadowed below
    let g = 100; // defined inside the block area in inspect->scope 
    console.log(g); //100 // because it is pointing to the block area
}
console.log(g); //10  // it is pointing to the script area

// illegal shadowing
// let t = 20;
{
    // var t = 20; // SyntaxError : identifier 't' has already been declared
    // we cannot do this becasue var is crossing the limit of block as it is defined in global
    // object 
}
// but this is fine because var is functioned scoped
let t = 20;
function x() {
    var t = 20; // SyntaxError : identifier 't' has already been declared
}
// WE can shodow let using let and const using const
// We cannot shadow let using var but we can shadow var using let
var h = 20;
{
    let h = 20; // we can do this as let is block scoped and will not interfere with var 
}

// lexical scope works the same way inside the block also
const a = 20;
{
    const a = 30;
    {
        const a = 40
        console.log(a) // 40
    }
    console.log(a) // 30
}
console.log(a) //20

// scopes for arrow fucntions and normal functions are exactly same
