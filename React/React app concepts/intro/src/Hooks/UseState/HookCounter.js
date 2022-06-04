import React , {useState}  from 'react'
// Importing useState, usestate is function so we simply calls it when we use it

// Rules of Hooks
// Only call Hooks at the top Level 
// Don't call Hooks inside loops ,conditions, or nested functions

// Only call hooks from React Functions
// Call them from within React functional components and not just any regular javascript function



function HookCounter() {
    // Array destructering 
    // useState hook returns an array with 2 elements. 
    // The first element is the current value of the state, and the second element is a state setter function.
    const [count, setCount] = useState(0) // useState takes initialy value of count
  return (
    <div>
        {/* We should not call setCount() directly as it will run once the button render so to avoid it make it a arrow functions */}
        {/* this will be the error we get = Too many re-renders. React limits the number of renders to prevent an infinite loop. */}
        {/* <button onClick={setCount(count + 1)}>Count {count}</button>  */}
        <button onClick={() => setCount(count + 1)}>Count {count}</button> 
    </div>
  )
}

export default HookCounter