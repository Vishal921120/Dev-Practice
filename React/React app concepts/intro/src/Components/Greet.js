import React from 'react'

export default function Greet(props) {
  // below is the way of destructuring , we can do this also in above line inside paranethesis
  const {name , classNo , children} = props  // in class component just use this.props
  return (
      <div>
          <div>Greet {name} {classNo}</div>
          {children}
      </div>
  )
}


// in App.js
{/* <Greet name="Vis" classNo="XIadf">
        <button>I am button</button> // this is our children
</Greet> */}