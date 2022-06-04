import React, { Component } from 'react'

export class ClassCounterOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ""
        }
    }
    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`
    }

    // Now when we clicked on the button , componentDidUpdate runs and in console
    // we get Updating document title. but here the problem is that when we enter the input
    // this componentDidUpdate runs again for that much time as we pressed the key.
    // so basically it is providing the same value to document.title again and again
    // although it has no connection to input tag. So this leads to a performance issue
    // So for this purpose we should compare the prevProps and prevState.
    // componentDidUpdate(){
    //     console.log("Updating document title")
    //     document.title = `You clicked ${this.state.count} times`
    // }


    // Now this will only run if the prevstate of count is different 
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log("Updating document title")
            document.title = `You clicked ${this.state.count} times`
        }
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}> clicked {this.state.count}</button>
            </div>
        )
    }
}



export default ClassCounterOne