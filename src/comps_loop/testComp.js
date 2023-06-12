import React, { Component } from 'react'

export default class TestComp extends Component {
  state = {counter:80}
  
  render() {
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={() => {
          this.setState({counter:this.state.counter+1})
        }}>Add</button>
      </div>
    )
  }
}