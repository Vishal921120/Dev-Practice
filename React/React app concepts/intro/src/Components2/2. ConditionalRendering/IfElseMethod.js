import React, { Component } from 'react'

class IfElseMethod extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
  render() {
    if(this.state.isLoggedIn){
        return(
            <div>Hello Vishal</div>
        )
    }else{
        return(
            //Hello vikas will be on the screen bcz isLoggedIn is false.
            <div>Hello vikas</div>
        )
    }
  }
}

export default IfElseMethod

// DisAdvantage is that render method looks crowed and lot of repeation.
// if esle conditions are not valid inside the jsx. But we can use ternary operator inside jsx
