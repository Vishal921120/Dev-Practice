import React, { Component } from 'react'
// Refs helps us to focus on any dom node which we want
// like in login pages we want directly to focus on input username node
// so for achieving this type of fuctionality we have Refs.
// there are 3 steps for doing this
// First create a inputRef
// Second pass it to the ref attribute
// And then see the node in console which we want to focus and then use that node for focus

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.inputRef) 
        // we get an object where we have current key to and value as input which is our node to focus
        this.inputRef.current.focus();
    }
    
    // Second use of Refs are for fetching the data
    clickHandler = () => {
        alert(this.inputRef.current.value); // value was availabe in current 
    }
  render() {
    return (
      <div>
          <input type="text" ref={this.inputRef} />
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo