// What are callback functions : A callback is a function passed as an argument to another function.
//Synchronous code runs in sequence. This means that each operation must wait for the previous 
//one to complete before executing. Asynchronous code runs in parallel. 
//This means that an operation can occur while another one is still being processed
// JavaScript is synchronous and single threaded language

// setTimeout(function(){
//     console.log("timer")
// }, 5000)
// function x(y){
//    console.log("x")
//    y()
// }

// x(function y(){ // here y is our callback function
//    console.log('y')
// })

// Event listeners
// let clicked = document.getElementById("click")
// clicked.addEventListener("click",click) // here second argument click is our callback fn
// function click(){
//     console.log("button clicked")
//     let heading = document.getElementById("heading")
//     heading.innerText = "hello Vishal"
// }

// Now we want to make a counter
// let count = 0
// document.getElementById("click")
//     .addEventListener("click", function click() {
//         console.log("Button Clicked", ++count)
//     })

// But the problem with above code is that anyone can change our count which is in our global object
// so for data hiding purpose we can use closures.

function counter() {
    let count = 0
    document.getElementById("click")
        .addEventListener("click", click )
    function click() {
            console.log("Button Clicked", ++count)
        }
    // document.getElementById("click").removeEventListener("click", click)

}
counter() // go inspect -> elements -> event listerners -> scopes -> closure
// console.log(count) // now we cannot access count , it will throw error that count is not defined

// These event listeners are heavy takes a memory in the form of closure so we need to remove these listeners
