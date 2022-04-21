//We shouldn't use this,args,call,bind,apply,constructor
//with arrow function because its behaviour is
// unpredictable

a = 100;
b =200;
c = 300;
 
function fun(){
    console.log(this.a + " " + this.b + " " + this.c);
}

let obj = {
    a : 10,
    b: 20,
    c: 30,
    fun1: function(){
        console.log(this.a + " " + this.b + " " + this.c);
    },
    fun2: fun,
    fun3: ()=> {
        console.log(this.a + " " + this.b + " " + this.c);
    }

}

let o2 ={
    a:1000,
    b:2000,
    c:3000
}

obj.fun1();  // this = obj
fun();       // this = global/window
obj.fun2();  // this = obj
obj.fun3();  // this = depends bcz its unpredicatble

obj.fun1.call(o2); // this= o2
fun.call(o2);      // this = o2
obj.fun2.call(o2); // this = o2
obj.fun3.call(o2)  // agian it give problem so we should never
// use this in arrow fn.