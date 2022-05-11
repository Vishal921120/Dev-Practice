import React, { Component } from 'react'

export class EventHandler extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message : 'hello'
    }
    // this.eventHandler = this.eventHandler.bind(this)
  }

//   eventHandler(){
//       this.setState({
//           message:'goodbye'
//       })
//   }

  eventHandler = () => {
    this.setState({
        message:'goodbye'
    })
  }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          {/* this below code will not run because here this has undefined value , so use other method*/}
          {/* <button onClick={this.eventHandler}>Click</button> */}
          {/* Mehtod 1. Bind this */}
          {/* <button onClick={this.eventHandler.bind(this)}>Click</button> */}
          {/* Method 2. use arrow function  */}
          {/* <button onClick={() => this.eventHandler()}>Click</button> */}
          {/* Method 3. bind this in constructor and use it here normally */}
          {/* <button onClick={this.eventHandler()}>Click</button> */}
          {/* Method 4. Make your function as an arrow function  */}
          <button onClick={this.eventHandler()}>Click</button>


      </div>
    )
  }
}

export default EventHandler