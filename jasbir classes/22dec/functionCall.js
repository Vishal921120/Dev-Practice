function outer(){
    console.log('hello in am outer')
    return function inner(){
        console.log('hello i am inner')
    }
}

let rVal = outer()
console.log(rVal)