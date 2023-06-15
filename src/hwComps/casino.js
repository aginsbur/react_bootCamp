import React, { useState } from 'react'

export default function Casino() {
    const [diceRoll, setDiceRoll] = useState(0);
    const [coins, setCoins] = useState(0);
    diceArr=[];
    return (
        <div className='col-md-4'>
            <div className='shadow p-2 overflow-hidden h-100'>
                <img src={`${diceArr[diceRoll]}`} className='w-50 border'/>
                <h4>Coins: {coins}</h4>
                <button onClick={() => {
                    setDiceRoll(_.random(1,6));
                    setCoins(coins-1);
                }}>Roll</button>
            </div>
        </div>
    )
}

import React, { Component } from 'react'
import ChildComp from "./childComp";

export default class Casino extends Component {
    state = { color:"silver"}

    changeTextColor=(_newColor)=>{
        this.setState({color:_newColor})
    }

    render() {
        return (
            <div className='text-center'>
                <h1 style={{color:this.state.color}}>this is parent comp</h1>
                <ChildComp changeTextColor={this.changeTextColor} />
            </div>
        )
    }
}