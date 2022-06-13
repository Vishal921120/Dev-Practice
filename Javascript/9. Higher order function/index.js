//A higher order function is a function that takes a function as an argument, or returns a function

// Ques write a code to evaluate area, circumference  and diameter of below radius
const radius = [3,5,4,7];

let calArea = function(radius){
    let output = [];
    for(let i=0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output
}
// console.log(calArea(radius));


let calCircumfernce = function(radius){
    let output = [];
    for(let i=0; i<radius.length; i++){
        output.push(2* Math.PI * radius[i]);
    }
    return output
}
// console.log(calCircumfernce(radius));


let calDiameter = function(radius){
    let output = [];
    for(let i=0; i<radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output
}
// console.log(calDiameter(radius));

// Now the problem with the above code is 
// Lot of repeation of code (There is principle in software engineering ie DRY Dont repeat yourself)

// Solution for above problem is higher order function

const area = function(radius){ // callback fn
    return Math.PI * radius * radius;
}
const diameter = function(radius){ // callback fn
    return 2 * radius ;
}
const circumference = function(radius){ // callback fn
    return 2* Math.PI * radius; 
}

// const calculate = function(radius, logic){ // Higher order function
//     let output = [];
//     for(let i=0; i<radius.length; i++){
//         output.push(logic(radius[i]));
//     }
//     return output
// }
// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));

// we have map which is higher order fn
console.log(radius.map(area)); // this will give the same output which we got from console.log(calculate(radius,area));

// Now how to make our calculate fn like map 
Array.prototype.calculate = function(logic){ // Now this is acutally the pollyfill of map function
    let output = [];
    for(let i=0; i<this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}
console.log(radius.calculate(area));