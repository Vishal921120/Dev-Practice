import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

// order of execution without child , and updating lifecyle methods
// lifecycle A constructor
// lifecycle A getderivedfromprops
// lifecyle A render
// lifecycle A componentDidMount

// order of execution with child B , but without updating lifecyling methods 
// lifecycle A constructor
// lifecycle A getderivedfromprops
// lifecyle A render
// lifecycle B constructor
// lifecycle B getderivedfromprops
// lifecyle B render
// lifecycle B componentDidMount
// lifecycle A componentDidMount

// order of updating phase after clicking on button 
// lifecycle A getderivedfromprops
// lifecyle A shouldComonentUpdate
// lifecyle A render
// lifecycle B getderivedfromprops
// lifecyle B shouldComonentUpdate
// lifecyle B render
// lifecyle B getSnapshotBeforeUpdate
// lifecyle A getSnapshotBeforeUpdate
// lifecyle B componentDidUpdate
// lifecyle A componentDidUpdate

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'vishal'
      }
      console.log ("lifecycle A constructor")
    }

    static getDerivedStateFromProps(props,state){ // rarely used method
        console.log ("lifecycle A getderivedfromprops")
        return null
    }

    componentDidMount(){
        console.log("lifecycle A componentDidMount")
    }

    shouldComponentUpdate(){ // rarely used method
        console.log('lifecyle A shouldComonentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProp,prevState){ //rarely used method
        console.log('lifecyle A getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecyle A componentDidUpdate')
    }

    handleChange = () => {
        this.setState({
            name:"Vikas"
        })
    }
  render() {
      console.log("lifecyle A render")
    return (
      <div>
          <div>LifecycleA</div>
          <button onClick={this.handleChange}>change state</button>
          <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA