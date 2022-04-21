//debug in chrome inspect also

function powerFunctionCreator(exp){
    if(typeof exp != 'number'){
        console.log("exp must be a number.")
        return null;
    }
  
    let powerFn = function(base){
        let rv = Math.pow(base,exp);
        return rv;
    }
    return powerFn
}

let squarer = powerFunctionCreator(2);
let sqo8 = squarer(8)
console.log(sqo8)

// Memory mapping concepts
// first step is parsing
// [       ]
// [       ] 
// [       ]
// [  sqo8 ] 
// [squarer]
// [pfc    ]

// Now squarer will call pfc fn then in stack pfc will be called and 
// powerFn address will store in stack . Now pfc will check what values
// are used by the powerFn . In our case powerFn is using exp value 
// so pfc will create a closure in which exp value will be stored and then
// it will be used in powerFn later.

// Inner function makes a clouser on the variables of outer fn which aren't defined 
// in the inner function.