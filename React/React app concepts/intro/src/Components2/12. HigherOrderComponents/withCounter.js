import React from "react";
// this is our higher order component which accepts another component as an argument and then
// updates that another component by passing the fucntionality as props.

// Important => now there is one issue of using Hoc , i.e when we pass props in our App.js to these 
// components like <Click name="Vishal"/> then this name prop doesn't pass to the Click component but 
// it will go to the HOC. In our case this name prop will be accessible in UpdatedComponent.
// so to pass this component to our Click component use destructing and spread opertor {this.props}

const UpdatedComponent = OriginalComponent => {
// const UpdatedComponent = (OriginalComponent,IncrementNumber) => { // the second argument will help our different component
// to increment differenlty . so for every component while exporting we will pass this number and only that particular component will increment by that number
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count : 0
            }
          }
      
          increment = () => {
              this.setState(prevState => {
                  return {count : prevState.count +1}
                //   return {count : prevState.count + IncrementNumber} // for different no. incremnet
              })
          }
        render(){
            return <OriginalComponent increment={this.increment} count={this.state.count} {...this.props}/>
        }
    }
    return NewComponent
}

export default UpdatedComponent