import React, { Component } from 'react'

class ShortCircuit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
  render() {
      // below will check left side and if it is true then it will give ouput as hello vishal otherwise do nothing
    return this.state.isLoggedIn && <div>Hello Vishal</div>

  }
}

export default ShortCircuit