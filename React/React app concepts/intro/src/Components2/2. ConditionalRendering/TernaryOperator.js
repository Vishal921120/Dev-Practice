import React, { Component } from 'react'

export class TernaryOperator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        return (
            this.state.isLoggedIn ?
                <div>
                    <div>hello</div>
                    <div>Vishal</div>
                </div> :
                <div>
                    <div>hello</div>
                    <div>vikas</div>
                </div>
        )
    }
}

export default TernaryOperator