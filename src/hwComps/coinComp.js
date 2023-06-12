import React, { Component } from 'react'

export default class CoinComp extends Component {

    render() {
        let item = this.props.item
        return (
            <div className='col-md-4 border p-2'>
                <img className='float-left' src={item.img}/>
                <h4>{item.name}</h4>
                <p>value: {Number(item.price_usd).toFixed(2)}</p>
            </div>
        )
    }
}