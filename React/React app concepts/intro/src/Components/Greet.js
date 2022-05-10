import React from 'react'

export default function Greet(props) {
  return (
      <div>
          <div>Greet {props.name} {props.class}</div>
          {props.children}
      </div>
  )
}
