// function along with lexical environment forms the closure

function x() {
    var a =7;
    function y(){
        console.log(a)
    }
    return y; // will return fn with its lexical scope
}
// also we can write above code like
// function x() {
//     var a =7;
//     return function y(){
//         console.log(a)
//     }
// }

var z = x() ; // so when we returned function it still maintains there lexical scope,
// they still remember where they were acually present.
z(); //7 // Though x is not present but still the returned fucntion knew it lexical scope
// and thats why we got 7 as our output

// Questions
function f() {
    var a =7;
    function y(){
        console.log(a)
    }
    return y;
    a = 80;
}
f()() // 7

function b() {
    var a =7;
    function y(){
        console.log(a)
    }
    a = 80;
    return y;
}
b()() //80

function y() {
    var a =7;
    function x(){
        var b = 8;
        function  w(){ // if we return this fucntion then it will have the access of a and b
            // throughtout the code because of closure formed.
            // And this a and b are not available for garbage collector
            console.log(a,b) 
        }
        w()
    }
    x()
}
y() // 7 8

// Uses of Closures:
   //Module Design pattern
   // currying
   //Functions like once
   //memoize
   // mantaining state in async world
   // setTimeouts
   //iterators
   //and many more