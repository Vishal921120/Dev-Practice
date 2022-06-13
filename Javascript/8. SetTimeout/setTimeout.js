// setTimeout doesn't always run after the specific time
// For example

// console.log("Start");
// setTimeout(function cb(){
//     console.log("cb fn")
// },5000);
// console.log("end");
// let assume that after above line we have millions of lines of code to execute

// Now we may think that our setTimeout will run after 5 sec but actually this is not the case
// Lets see how the above code will work
// first a global execution context will be created in the call stack and after that 
// Start will be printed on the console.
// Next setTimeout makes our cb function to push it in web Api environment where 5 sec timer will start
// Now we know our js doesn't wait for anyone so "end" will print in the console.
// After this those millions line of code will start executing but during this time our cb fn will be ready 
// ready to execute and will pushed in the callback Queue. But becasue of those millions line our call stack has
// still global execution context so our event loop ask our cb to wait more in callback queue.

// lets make a code to demonstrate the above theory 
console.log("Start");
setTimeout(function cb(){
    console.log("cb fn")
},5000);
console.log("end");

// code which will run for 10 sec
let startTime = new Date().getTime();
let endTime = startTime;
while(endTime < startTime+10000){
    endTime = new Date().getTime();
}
console.log("while expires")

// output 
// start 
// end 
// while expires (after 10 sec)
// cb fn (which we were expecting to execute after 5 sec but executed after 10 sec)

// ques
console.log("Start");
setTimeout(function cb(){
    console.log("cb fn")
},0);
console.log("end");
// output
// start
//end
// cb fn