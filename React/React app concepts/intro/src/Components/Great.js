//Always import react and its component in every class component file
// for returning multiple div we need to enclose all in a single div or a wrapper.
//Always have name of component starting with capital letters
import React, { Component } from 'react'

class Great extends Component {
  render() {
    return (
      //we can only return one html tag so we wrapped in a sinle div tag
      <div>
        <div><h1>Hello Great coder <br />This is class Component </h1></div>
        <div><h1>Hare Krishna <br />Radhe Radhe</h1></div>
      </div>

    )
  }
}

// default export has a benifit that we can change its name while importing
export default Great
