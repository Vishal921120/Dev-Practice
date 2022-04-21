function outer(first){
    console.log('Inside outer')
    return function inner(second){
        console.log('inside inner')
        return first * second
    }
}

let rVal = outer(2)
console.log('before calling rVal tht contains inner')
let ans = rVal(4)
console.log(ans)