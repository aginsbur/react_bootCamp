import React, { Component } from 'react'

export default class Counter extends Component {
  state = {counter:4};

  onPlusClick = () => {
    let counter = this.state.counter
    this.setState({counter: (counter >= 5) ? 0 : counter+1});
    // אם עושים תנאי רגיל צריך לזכור שהאחריי הסט סטייט המשתנה בסטייט לא מעודכן
    // עדיין בפונקציה עצמה
    // if(this.state.counter+1 > 5){
    //   this.setState({counter:0});
    // }
  }

  onMinusClick = () => {
    let counter = this.state.counter
    this.setState({counter: (counter <= 0) ? 5 : counter-1});
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.onMinusClick}>Minus</button>
        <button onClick={this.onPlusClick}>Plus</button>
      </div>
    )
  }
}