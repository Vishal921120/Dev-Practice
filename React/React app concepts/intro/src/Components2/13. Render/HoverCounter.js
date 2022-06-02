import React, { Component } from 'react'

export class HoverCounter extends Component {
    render() {
        return (
            <div onMouseOver={this.props.increment}>
                hover {this.props.count} times
            </div>
        )
    }
}

export default HoverCounter