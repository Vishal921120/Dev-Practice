import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class Click extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count : 0
    //   }
    // }

    // increment = () => {
    //     this.setState(prevState => {
    //         return {count : prevState.count +1}
    //     })
    // }
  render() {
      const {count,increment,name} = this.props
    return (
      <div>
          <button onClick={increment}>{name} Clicked {count} times</button>
          {
              // let say our client want one more counter for key press so again we make same
              // functionality like we made for click and hover. So if we see we are making a same
              // fucntionality again and again so to avoid this type of issue we need higher order components

              // so why we need hoc -> to share common functionality between components.
              // const enhancedComponent = higherOrderComponent(origanlComponent) is same as
              // const ironMan = withSuit(tonyStark)
          }
      </div>
    )
  }
}

export default UpdatedComponent(Click) 
// export default UpdatedComponent(Click,5)  // for increment by our desired number