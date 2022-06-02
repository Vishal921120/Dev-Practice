import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class Hover extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count : 0
    //     }
    //   }
  
    //   increment = () => {
    //       this.setState(prevState => {
    //           return {count : prevState.count +1}
    //       })
    //   }
  render() {
      const {count,increment} = this.props
    return (
      <div onMouseOver={increment}>
          hover {count} times
      </div>
    )
  }
}

export default UpdatedComponent(Hover)
// export default UpdatedComponent(Hover,10)  // for increment by our desired number 
