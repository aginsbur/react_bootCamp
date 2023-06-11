import React, { Component } from 'react'

export default class Gallery extends Component {
  state = {counter:0};
  pics_ar = ["cake3.jpg","orange5.jpg","pic2.jpg","pic3.jpg"];

  onNextClick = () => {
    let counter = this.state.counter;
    this.setState({counter: (counter < this.pics_ar.length-1) ? counter+1: 0})
  }

  onBackClick = () => {
    let counter = this.state.counter;
    this.setState({counter: (counter > 0) ? counter-1: this.pics_ar.length-1})
  }

  render() {
    return (
      <div className='text-center'>
        <img src={"/images/"+this.pics_ar[this.state.counter]} alt="cake"  className='col-md-4' />
        <h3>{this.state.counter}</h3>
        <br />
        <button onClick={this.onBackClick}>back</button>
        <button onClick={this.onNextClick}>next</button>
      </div>
    )
  }
}