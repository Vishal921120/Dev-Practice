import React, { Component } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Vishal'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : 'Vishal'
            })
        }, 4000);
    }
  render() {
      console.log('===================Parent component render =====================')
      // Notice we are not changing name state after 4 sec in set state method.
      // Now if we see console initally we get first parent render then regualar comp render in last pure comp render
      // but after 4 seconds because of setInterval our parent agains render and then our regular comp renders and this
      // loops goes on where as our pure comp only renders once initially 

      // So whats the differnce between regualar comp and pure comp.
      // 1. Regular comp
      // A regular comp does not implement the shouldComponentUpdate method. it always 
      // returns true by default.

      // 2. Pure comp
      // A pure component on the other hand implements shouldComponentUpdate with a 
      // shallow props and state comparison.

      // Shallow comparison (sc)
      // Primitive Types
      // a (sc) b returns true if a and b have the same value and are of the same type
      // Ex : string 'Vishal' (sc) string 'Vishal' returns true

      //Complex Types :- a (sc) b returns true if a and b refernce the exact same object.

      // Ex. of array
      // var a = [1,2,3];
      // var b = [1,2,3];
      // var c = a; 

    //   var ab_eq = (a===b); // false :- a (sc) b gives false as they are pointing different refrence
    //   var ac_eq = (a===c); // true :- a (sc) c gives true because both are pointing the same refernce

    // same case in objects.

    // So pure components compares prevState and prevProps with currentState and currentProps and if 
    // it sees any difference then it re- render the component.

    // In our type we are dealing with primitive types and prop comparison , we are sending a prop of 
    // type string and value of Vishal . So pure components sees after 4 sec that our previous prop value
    // is no different from our current prop value so it doesn't re render.

    // Now if we make our parent comp as pure component then it will compare states and will not re-render
    // and because our parent isn't re rendering hence our child regular component will aslo not re-rendre.

    // Why to use pure components.
    // Pure components avoids unneccassary renders and boosts the performance of our app
    // It is a good idea to ensure that all the children components are also pure to avoid unexpected behaviour
    // pure components only work in class components not in functional components.

    // Never mutate the state in pure components .Always return a new object that reflects the new state. 
    // We should always return new array/object refernce while pushing new element to array/object because
    // otherwise our pure comp only see the refernce and it found no change so our update in array/object will lost
    // and will not re-render.




    return (
        <>
            <div>ParentComp</div>
            <MemoComp name={this.state.name}/>
            {/* <RegularComp name={this.state.name}/>
            <PureComp name={this.state.name}/> */}
        </>
    )
  }
}

export default ParentComp