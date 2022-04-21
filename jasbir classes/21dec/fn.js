// function name(params,params2,params3) {
//     return console.log('your name is ', params,params2,params3) 
// }

// name("Bisjsla","ramm")

function fn(){
  console.log(arguments)
}

function fn(a,b){
    return  a+b;
}

console.log(fn(2,3,4,5,56))

function fn(x,y,z,t,x){
    return  x+y+z+t+x;
}
console.log(fn(2,3,4,5,56))
