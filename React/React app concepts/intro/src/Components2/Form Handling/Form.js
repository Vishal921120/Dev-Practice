import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         topic : 'react'
      }
    }

    handleUserChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic : event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.topic} ${this.state.username}`)
        // to avoid auto refresh of page after submiting we can use preventDefault which also help to avoid data loss.
        event.preventDefault()
    }
  render() {
    const {username , topic} = this.state
    return (
      <form onSubmit={this.handleSubmit}> 
          <div>
              <label>User Name</label>
              <input type='text' value={username} onChange={this.handleUserChange}/>
          </div>
          <div>
              <select value={topic} onChange={this.handleTopicChange}>
                  <option value='react'>React</option>
                  <option value='angular'>Angular</option>
                  <option value='vue'>Vue</option>
              </select>
          </div>
          {/* defining type submit helps user to submit info by clicking enter. */}
          <button type='submit'>Submit</button> 
      </form>
    )
  }
}

export default Form