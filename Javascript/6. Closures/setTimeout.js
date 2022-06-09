// Javascript doesn't wait for anything 
function x(){
    var a =10;
    setTimeout(function(){ // this code will execute after 6 sec and it also make closure on the refernce of varibale a
        console.log(a)
    },6000)
    a = 15 // here our value of a is updated before 6 sec seconds so above console  will give 15 as output
    console.log("Hello Vishal")
}
// x()

//Question :- WE want our output 1,2,3,4,5, in different line after each seconds
function y(){
    for(var i =1; i<=5; i++){
        setTimeout(function(){ // the function inside setTimeout make closure on the refernce of i(Note:- closure on refernce, not on value)
            console.log(i)
        },i*1000)
        // As we know js doesn't wait for anyone , so the complete for loop will run and the last value of var becomes 6 
        // As we know var has the same memory space i.e global object so when our setTimeout will run for the first time after 1 sec
        // and will point to the i refernce , it will see the value 6 there and will print it for 6 times 
    }
    console.log("Hello Vishal")
}
// y()
// but we got output like 6,6,6,6,6,6 in different line why? Reason above
// solution for the above problem is to use let varibale

function z(){
    for(let i =1; i<=5; i++){ // AS we know let is blocked scope and everytime the for loop runs, it make a different 
        // i altogther with different reference 
        setTimeout(function(){ // So each time our function will make a closure on different references 
            console.log(i)
        },i*1000)
    }
    console.log("Hello Vishal")
}
// z()

// But what if interviwer asked you to not use let and do it with var only
// Solution is closure , as the problem with var was that it is changing the same reference , so to make separate copy 
// of each i we will use closure and enclose our setTimeout in another function.
function z(){
    for(let i =1; i<=5; i++){  
        function close(x){
            setTimeout(function(){
                console.log(x)
            },x*1000)
        }
        close(i)
    }
    console.log("Hello Vishal")
}
z()