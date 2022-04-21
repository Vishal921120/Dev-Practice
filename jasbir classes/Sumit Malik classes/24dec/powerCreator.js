// function powerCreator(exp){
//     let fun = function(base){
//         let rv = Math.pow(base,exp)
//         return rv;
//     }
//     return fun;
// }

// let squarer = powerCreator(2)
// let val = squarer(6)
// console.log(val)

//change powerCreator to make it a producer of such fn
//whose exponent we can change on a later date

function powerCreator(obj){
    let fun = function(base){
        let rv = Math.pow(base, obj.exp)
        return rv;
    }
    return fun;
}

o1 = {
    exp : 2,
}

let squarer = powerCreator(o1)
let val = squarer(6)
console.log(val)

o1.exp = 3
// Now squarer will give cubic value of 6
let val2 = squarer(6)
console.log(val2)