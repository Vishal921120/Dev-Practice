// Hoisting is a phenomena in js by 
//which we can access these varibales and fn even before we have initialized it 
// Even before our code is executed , the memory is allocated to all functions and variables

getName();  // Hare Krishna
console.log(x);  // undefined
console.log(getName); // f getName() { console.log("Hare Krishna")}

var x =3; // If we remove this line then our console.log(x) above gets an error that x is not defined

function getName(){
    console.log("Hare Krishna")
}

// if we make our getName an arrow fucntion 
// var getName = () => {console.log("Hare Krishna")}
// Then our getName will get an undefined during memory allocation
// So our 5th line will throw an error as we are calling an undefined
// var getName = function () {}  // this will also get undefined because
// this will aslo act as variable like arrow function and we know for varibales
// we get undefined during memory allocation

