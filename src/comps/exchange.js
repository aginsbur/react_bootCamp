import React, { Component } from 'react'

export default class Exchange extends Component {
  state = {total:0}
  amountRef = React.createRef();
  currencyRef = React.createRef();
 

  onAmountChange = () => {
    let total = this.amountRef.current.value * this.currencyRef.current.value
    this.setState({total:total.toLocaleString()})
  }

  render() {
    return (
      <div className='p-2' style={{border:"2px solid black"}}>
        <h2>Enter the currency</h2>
        <select ref={this.currencyRef} onChange={this.onAmountChange} className="form-select">
          <option value="3.57">USD</option>
          <option value="3.51">Euro</option>
          <option value="3.7">Pound</option>
        </select>
        <h2>Enter the amount you want</h2>
        <input defaultValue="1000" ref={this.amountRef} onInput={this.onAmountChange} type="number" className='form-control'  />
        <h3>total:{this.state.total} NIS</h3>
      </div>
    )
  }
}