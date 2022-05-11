import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment() {
        // we should never modifiy state by direct , because this will not show changes on 
        // UI . so always use setState method to change state.
        // this.state.count = this.state.count+1;
        // console.log(this.state.count);
        
        // below code will not work for increment5 as this code is running everytime on constructor value
        // so we need to pass previous value in order to incremant by 5;
        // this.setState({
        //     count: this.state.count + 1
        // })

        this.setState(prevState => ({
            count : prevState.count + parseInt(this.props.addValue)
        }))
    }
    decrement() {
        this.setState({
            count: this.state.count - 1
        },() => console.log(this.state.count)) //whatever code we want to run after our setState
        // put it in setState second argument as it behave like a callback or run after the updated state.
        console.log('outer' , this.state.count) // this will run before our setState 
    }

    incrementBy5(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <h1>counter : {this.state.count}</h1>
                <button onClick={() => this.incrementBy5()}>Increment By 5</button>
                <button onClick={() => this.decrement()}>Decrement</button>
            </div>
        )
    }
}

export default Counter