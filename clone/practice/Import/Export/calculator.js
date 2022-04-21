function add(a,b){
    console.log( a+b)
}
function sub(a,b){
    console.log( a-b)
}
function mul(a,b){
    console.log( a*b)
}
function div(a,b){
    console.log( a/b)
}

module.exports = {
    addition : add,
    subtraction : sub,
    multiply : mul,
    divide : div
}

// module.exports is a Object provided by Node.js by
// which you can export your functions in key value pair
// you will use your functions with the keys you have assigned
// to them