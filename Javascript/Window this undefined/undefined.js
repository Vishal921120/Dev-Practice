console.log(a); // undefined
var a ;
// a = 7;
console.log(x) //Error : x is not defined

if(a===undefined){
    console.log("a is undefined")
}else{
    console.log("a is not undefined")
}

// Javascript is a loosely type/weakly type language
// Becasue we can assign anything to a varible for ex
var b ;
console.log(b);
b = 10; // assigned number
console.log(b);
b = "hello" // assigned string
console.log(b);