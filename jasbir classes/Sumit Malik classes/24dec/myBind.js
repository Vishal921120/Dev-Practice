Function.prototype.myBind = function(){
    let orgFn = this;  //fun1(frnd1,frnd2)
    let argsArray = Array.from(arguments)  
    let newThis = argsArray[0]
    let newParams = argsArray.slice(1)

    let myFun = function(){
        let moreParams = Array.from(arguments)
        let totalParams = newParams.concat(moreParams)

        orgFn.apply(newThis,totalParams)

    }
    return myFun
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

let boundedFn = obj.fun1.myBind(obj2,"toni","gola","bhaman")
// now in boundedfn we stored a fn which we can call like below
// boundedFn()
// we can also pass arguments in boundFn
// this argument will also store in the last
boundedFn('nahna')
