import React, { Component } from 'react';

class State extends Component {

 constructor(){
     super();
     this.state = {
         message : 'This is State'
     }
 }

 changeState(){
     this.setState({
         message : 'State changed'
     })
 }


 render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeState()}>Subscribe</button>
            </div>
        )
    }
}

export default State