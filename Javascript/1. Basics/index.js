// Everything in JavaScript happens inside an Execution Context
// In gloabal execution context we have two components 
// So it will first allocates memory in the first phase when we run our below code

// Memory(also known as varibale environment)  (memory is allocated to the variables and functions)          
// allocates memory to n which is undefined intially 
// allocates memory to function square (stores the whole code )
// allocates memory to square2 which is undefined initally
// allocates memory to square4 which is undefined initally

// In the second phase , Code execution phase
// Now js once again runs through the code line by line 
// Now 2 is allocated to n
        // Now square2 invokes the function which again makes local execution context for that function
        //So our first phase is again memory allocation
        // Memory 
        // allocates memory num which is inside the function paraenthesis as value undefined
        // allocates memory ans which is undefined too

        // code execution
        // 2 is allocated to num
        // num*num is allocated to ans which is 4 in our code
        // return ans which is 4

        // Now after running above process completely our whole execution context will now be completely deleted.
// Now sqaure2 gets value 4
        // Now square4 invokes the function which again makes another local execution context for that function
        //So our first phase is again memory allocation
        // Memory 
        // allocates memory num which is our parameter inside the function paraenthesis as value undefined
        // allocates memory ans which is undefined too

        // code execution
        // 4 is allocated to num
        // num*num is allocated to ans which is 16 in our code
        // return ans which is 16

         // Now after running above process completely our whole execution context will now be completely deleted.
// Now undefined of square4 is replaced by value 16
// And finally after running above process completely our whole global execution context will also be completely deleted.

var n = 2;
function square (num) {
    var ans = num * num 
    return ans;
}

var square2 = square(n);
var square4 = square(4);

// Now to manage all execution context creation and deletion , js engine has a call stack
// In the bottom of the stack we have our global execution context when our js is run for the first time
// and similarly our local execution put above the global execution context in call stack
// once they completely runs they gets popped out of stack.
// So basically our Call stack maintains the order of execution of execution contexts
// So call stack is also known as Execution context stack
                                // Program stack
                                // control stack
                                // runtime stack
                                // machine stack