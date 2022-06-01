import React, { PureComponent } from 'react' // use rpce for creating pure component.
// We can see two differences from a normal component.
//1. while importing {PureComponent}
//2. while extending our class.

class PureComp extends PureComponent {
  render() {
      console.log('pure component Render')
    return (
      <div>PureComponent {this.props.name}</div>
    )
  }
}

export default PureComp