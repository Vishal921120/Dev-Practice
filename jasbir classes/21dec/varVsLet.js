//reassign
//function scope,redeclare ,you can access a variable before declaration
// console.log(a);
// var a;
// a=20;
// var a;


// let
//can't redeclare
function fn() {
    console.log('before declaration', a)
    var a;
    console.log('after declaration', a)
    a = 10;
    console.log('after initilization', a)
    if (true) {
        //Temporal dead zone -> you can't access a let variable before declarion
        // console.log('before declaration', a)
        let a;
        console.log('after declaration', a)
        a = 20;
        console.log('after initilization', a)
    }
    //block scope ,so a = 10 not 20....
    console.log('after initilization', a)
}
fn()
