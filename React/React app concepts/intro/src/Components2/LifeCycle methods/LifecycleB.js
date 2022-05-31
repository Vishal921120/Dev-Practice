import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'vishal'
      }
      console.log ("lifecycle B constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log ("lifecycle B getderivedfromprops")
        return null
    }

    componentDidMount(){
        console.log("lifecycle B componentDidMount")
    }

    shouldComponentUpdate(){
        console.log('lifecyle B shouldComonentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProp,prevState){
        console.log('lifecyle B getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecyle B componentDidUpdate')
    }
  render() {
      console.log("lifecyle B render")
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB