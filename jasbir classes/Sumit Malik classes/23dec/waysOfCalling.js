
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

//normal calling
// obj.fun1("ram","shyaam")

// calling using call fn 
// call fn is available on every fn ,basically it is used to 
//override the default , like in below example we passed obj2 as arguments
// obj.fun1.call(obj2,"toni","gola","bhaman")

//calling using apply
//differnce b/w call and apply is that apply pass the arguments in array form
// obj.fun1.apply(obj2,["toni","gola","bhaman"])

//calling using bind
// we can't call directly using bind as bind returns a function
// which we can store in a variable for future call
let boundedFn = obj.fun1.bind(obj2,"toni","gola","bhaman")
// now in boundedfn we stored a fn which we can call like below
boundedFn()
// we can also pass arguments in boundFn
// this argument will also store in the last
boundedFn('nahna')

// **************************************Important*******************************************
// write all the prototypes of myfilter,myreduce,mymap,mybind,mycall,myapply