Function.prototype.myCall = function(){
    let orgFun = this;
    let args = Array.from(arguments)
    let thisForCall = args[0]
    let params = args.slice(1)

    thisForCall.fun = orgFun
    console.log(orgFun)
    thisForCall.fun(...params)
    delete thisForCall.fun;
}

Function.prototype.myApply = function(){
    let orgFun = this;
    let args = Array.from(arguments)
    let thisForCall = args[0]
    let params = args[1]

    thisForCall.fun = orgFun
    thisForCall.fun(...params)
    delete thisForCall.fun;
}

let obj = {
    fun1 : function(frnd1,frnd2){
        console.log('name '+ this.fName + ' age ' + this.age)
        console.log(this.fName +" says hello to",frnd1,frnd2)

        console.log(arguments)
    },
    fName:"vishal" ,
    age: "21"
}

let obj2 = {
    fName : "vikas",
    age : "24"
}

obj.fun1.myCall(obj2,"toni","gola","bhaman")
// console.log("-------------------------------")
// obj.fun1.myApply(obj2,["toni","gola","bhaman"])
