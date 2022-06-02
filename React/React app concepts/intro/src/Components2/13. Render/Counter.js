import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export class Counter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count : 0
        }
      }
  
      increment = () => {
          this.setState(prevState => {
              return {count : prevState.count +1}
          })
      }
  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.increment)}
      </div>
    )
  }
}

export default Counter