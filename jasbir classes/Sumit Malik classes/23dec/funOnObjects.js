let obj = {
    fun1 : function(){
        console.log('name '+ this.fName + 'age ' + this.age)
    },
    fun2 : function(){
        console.log('name '+ obj.fName + 'age ' + obj.age)
    },
    fun3 : function(){
        console.log('name '+ fName + 'age ' + age)
    },
    fName:"vishal" ,
    age: "21"
}

obj.fun1() //works in js and java
obj.fun2() //works in js but not in java
// obj.fun3() //works in java but not in js