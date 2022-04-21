function fun(a,b){
    console.log(a +' '+ b)
    console.log(arguments[0],arguments[1],arguments[2])
    console.log(arguments) // array like, not an array
    let res = Array.from(arguments) // for making it array
    let sq = res.map(x => x*x)
    console.log(sq) // will return an array of squares of agruments
}

// these all will run 
console.log('type 1 --------------------------')
fun() 
console.log('type 2 ---------------------------')
fun(10)
console.log('type 3 ---------------------------')
fun(10,20)
console.log('type 4 ---------------------------')
fun(10,20,30)