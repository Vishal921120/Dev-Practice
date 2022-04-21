fun()

function fun(){  //function declarion
    gun()
}


var gun = function(){ //function expression
    console.log('hello')
}

// output -> gun isnt a fn

// Points to remeber
// During Hoisting :-
// funtion declartion moves at top with  its body
// fucntion expression moves at top without body


// why above code isnt working

// because of hoisting fun with its body moves 
// top because it is function declartion
// but in case of funtion expression the gun will go
// top without its body so it will not find gun fn

// during parsing/arranging/reading our code will become 
// 1. var fun with its body
// 2. var gun without its body
// 3. fun()
// 4. gun's body

// so from above when 3rd line run then it will call
// gun function but you can see gun's body is defined
// at 4th line so it will not find its body and 
// it will return gun is not a funtion 
   

  stack 
   [            ]
   [            ]
   [            ]
   [            ] gun()   (but gun is not defined)
   [            ] fun()   (it will call gun fn)
   [            ] var gun (without body)
   [            ] var fun (with its body)