import React, { Component } from 'react'
import ChildComponent from './ChildComponent'; // importing child 

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'Vishal'
      }

      this.greetParent = this.greetParent.bind(this); // binding this as we are not using arrow fn
    }
    greetParent(child){ // in child we have "beta" coming from our child component
        alert(`Hello ${this.state.parentName} from ${child}`)
    }
  render() {
    return (
      <div>
          {/* Passed greetParent fn as a prop to child  */}
          <ChildComponent handlerGreet = {this.greetParent}/> 
      </div>
    )
  }
}

export default ParentComponent