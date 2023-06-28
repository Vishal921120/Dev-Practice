var x = 1;
a(); // 10
b(); // 100
console.log(x); // 1

function a(){
    var x = 10;
    console.log(x);
}


function b(){
    var x = 100;
    console.log(x);
}

console.log(x);//1

//---------------------------------------------------------------
// The shortest js code is empty file. And when we debug it in inspect
// we get our global object which is window and also a keyword called this

var a = 10;
function c() {
    var d =12
}

let bol = (window === this)
console.log(bol); // true
console.log(window.a); // 10
console.log(a); // 10  so if we don't put anything in front of a , it assumes it to be window object.
console.log(this.a) // 10

