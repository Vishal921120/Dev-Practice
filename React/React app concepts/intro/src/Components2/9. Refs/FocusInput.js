import React, { Component } from 'react'
import Input from './Input'

// refs cannot attach to the fuctional components

class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }

    clcikHandler = () => {
        console.log(this.componentRef)
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
          <Input ref={this.componentRef}/>
          <button onClick={this.clcikHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput