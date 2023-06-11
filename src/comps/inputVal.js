import React, { Component } from 'react'

export default class InputVal extends Component {
  state = {color:"silver"}
  pic = "logo_new.png"
  // createREf -> מאפשר לי מתוך הריאקט דום לדבר עם אלמנט
  inputRef = React.createRef()

  changeColor = () => {
    // current-> כדי לדבר עם האלמנט
    console.log(this.inputRef.current.value);
    let input_val = this.inputRef.current.value
    this.setState({color:input_val});
  }

  render() {
    return (
      <div className='p-2 ofer' style={{background:this.state.color}}>
        <h2>Enter your favorite color: {this.state.color}</h2>
        <input onInput={this.changeColor} ref={this.inputRef} type="text" />
        <button onClick={this.changeColor}>Change color</button>
        {/* {} ->  אם נרצה להכניס לאטרביוט מידע ממשתנה או כחלק
        מסטרינג*/}
        <img src={"/images/"+this.pic} width="200"/>
        <img src="/images/logo_new.png" width="200"/>
      </div>
    )
  }
}
