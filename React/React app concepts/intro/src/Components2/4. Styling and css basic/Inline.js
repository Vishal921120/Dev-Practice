import React from 'react'

let heading = {
    color : 'blue',
    fontSize : '200px' // key should be in camelCase and value should be a string
}

function Inline() {
  return (
    <div style={heading}>inLine</div>
  )
}

export default Inline