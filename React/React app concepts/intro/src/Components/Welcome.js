import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    // props.name = "Vikram" we cannot change props as they are immutalbe , thats why we need state for dynamic features
    return (
        // In class component we need this keyword to access props
      <div>Welcome {this.props.name} {this.props.children}</div>
    )
  }
}

export default Welcome