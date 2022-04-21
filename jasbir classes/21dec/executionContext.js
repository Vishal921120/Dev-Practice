// console.log('before declaration', a)
// var a;
// console.log('after declaration', a)
// a = 10;
// console.log('after initilization', a)
// function fn() {
//     console.log('before declaration', a)
//     var a;
//     console.log('after declaration', a)
//     a = 10;
//     console.log('after initilization', a)
// }
// fn()

// var is function scope

function fn() {
    console.log('before declaration', a)
    var a;
    console.log('after declaration', a)
    a = 10;
    console.log('after initilization', a)
    if (true) {
        console.log('before declaration', a)
        var a;
        console.log('after declaration', a)
        a = 20;
        console.log('after initilization', a)
    }
    console.log('after initilization', a)
}
fn()

