//Differnce between function statement and function expression
// Hositing is the difference 

// a() // we can run this as initially at memory allocation , a is assigned a complete function
// b() // but for b it will be treated as a normal variable so initally it will get undefined 
// and calling an undefined will throw an error. // typeerror , b is not a function
// Function Statement aka Function declartion
// defining a fn like below is function statement
function a(){
    console.log("a is called")
}

// Function Expression
// assigning function to a varibale is fucntion expression
var b = function(){
    console.log("b called")
}

// Anonymous Function
// A function without a name is anonymous fn
// But we cannot run the below code 
// function (){

// }
// We got SyntaxError : fucntion statements require a function name
// So what the use of anonymous fn : - we can use this to assign to varible like we did 
// in function expression.

//Named function expression : fn expression with its name
var c = function xyz(){
    console.log("b called")
}
// we cannot call it like xyz() , this will give error that xyz is  not defined because it is not present in our global object
// To access the inside fn we can use it like below
var c= function(){
    console.log(xyz)
}

// Differnce between parameters and arguments

function e(param1, param2){ // the label or identifier which gets these values are parameters.
    console.log("b called")
}
e(1,2) // Values given to a function is arguments

// First class function / First class Citizens
//First-Class Function: A programming language is said to have First-class functions if functions in that language are treated like other variables. 
//So the functions can be assigned to any other variable or passed as an argument or can be returned by another function. JavaScript treat function as a first-class-citizens.

// Assigning fn to a variable
var g= function(){
    console.log(xyz)
}
// g()

// Passed as an argument to another fn
function pass(y){
    console.log(y)
}
function y(){
    console.log('hello')
}
pass(y); // function y is passed as an argument
// output : ƒ y(){ console.log('hello')}

// Returned by another fn
function v(){
    return function w(){
        console.log("hwlo")
    }
}

console.log(v())  // output : ƒ w(){ console.log("hwlo")}

// Let const arrow fn are introduced in Es6


// For Revision
// Function statement / Function Declaration : the function is normally defined and can be used later on
// Function expression : the function is first created and assigned to a variable so that it can be called by its variable name and unless it is defined, it cannot be executed otherwise it throws out "Uncaught TypeError"

// Anonymous function : function where there is no need to define name for the function, it just can be assigned to variable

// Named function : Normal function with its name assigned to a variable !!In this case you cannot call function by its name in outer scope!! (Scope Chain)

// first class Functions / first class citizens : 
// 1) used as values
// 2) can be passed as argument
// 3) can be executed inside a closured function
// 4) can be taken as return