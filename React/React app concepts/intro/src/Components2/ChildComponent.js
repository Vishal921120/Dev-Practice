import React from 'react'

function ChildComponent(props) { //use prop in paraenthesis to receive props from parent
  return (
    <div>
        {/* received handlerGreet from parent  */}
        {/* <button onClick={props.handlerGreet}>Greet Parent</button> */}
        {/* With the help of arrow fn we can pass parameters to the function defined in the parent
        from child Component. */}
        {/* Here beta is passed as parameter which we will receive in parent Component fn. */}
        <button onClick={() => props.handlerGreet("beta")}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent