
// this code will give 3,3,3 
// but we wanted 0,1,2
// function outer(){
//     var arr = []
// // if we use let in the for loop then we will get
// // our desired result 0,1,2 
//     for ( var i = 0; i < 3; i++) { 
//         arr.push(function (){
//             console.log(i)
//         })
        
//     }
//     return arr;
// }

// console.log('before calling outer')
// var arr = outer()
// arr[0]()
// arr[1]()
// arr[2]()
// console.log('after calling outer')


// correct -- this will give 0,1,2 
function outer(){
    var arr = []
    for ( var i = 0; i < 3; i++) {
        function outer1(){
            //j k liye har bar alag se variable bnate hai
            var j=i;
            return function(){
                console.log(j)
            }
        }
        arr.push(outer1())     
    }
    return arr;
}

console.log('before calling outer')
var arr = outer()
arr[0]()
arr[1]()
arr[2]()
console.log('after calling outer')
