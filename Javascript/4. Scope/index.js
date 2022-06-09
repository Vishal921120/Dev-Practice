// Scope in js is directly related to lexical environment
// lexical means in hierarchy or in sequence

function a(){
    // Now js engine will try to find b in local memory of 
    // a's execution context.
    console.log(b);
    c()
    function c(){
        console.log(b); // if don't use b here then it will  not create closure
    }
}
var b = 10;
a();

// lexical enviornmnet = local memory + refernce to lexical environment of parent 

// Fn c is lexically inside a so we will get the lexical environment of a
// fn a is lexically inside global so we will get the lexical environemtn of global
// the whole chain of lexical enviornment is scope chain