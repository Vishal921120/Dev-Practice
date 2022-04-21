let str = "     Hello Kanjhawala"
// console.log(str.length)
// console.log(str.replace('kanjhawala','ladpur'))
// console.log(str.substr(12,3))
// console.log(str.slice(1,12))
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// let str2 = "jai hind dosto   "
// console.log(str.concat(' ',str2))
// console.log(str.concat(' ',str2).trim())

// IIFE imidieatly invoked function expression
// let mul = (function(a,b){
//     console.log(a*b)
// })(15,46)

// for in loop 

let obj = {
    seema : 'not loyal',
    pooja : 'lair',
    poonam : 'disrespectful',
    preeti : 'nothing'
}
// console.log(obj)

for(let key in obj){
    console.log( key, obj[key]  )
}
