// Scope in js is directly related to lexical environment
// lexical means in hierarchy or in sequence

function e(){
    a();
    console.log("not found in e")
    function a(){
        // Now js engine will try to find b in local memory of 
        // a's execution context.
        console.log("inside a",b);
        c()
        console.log("not found in a")
        function c(){
            console.log("inside c",b); // if don't use b here then it will  not create closure
            console.log("not found in c")
        }
    }
}

var b = 10;
e();

// lexical enviornmnet = local memory + refernce to lexical environment of parent 

// Fn a is lexically inside e so we will get the lexical environment of e
// Fn c is lexically inside a so we will get the lexical environment of a
// fn a is lexically inside global so we will get the lexical environemtn of global
// the whole chain of lexical enviornment is scope chain