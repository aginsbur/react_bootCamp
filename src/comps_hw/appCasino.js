import React, { useState } from 'react'
import _ from 'lodash';

export default function AppCasino() {
    const [diceRoll, setDiceRoll] = useState(1);
    const [coins, setCoins] = useState(5);

    return (
        <div className='container'>
            <div className='col-md-8 text-center shadow p-2 overflow-hidden h-300'>
                <h1 className='text-info'>Welcome to the casino!</h1>
                <img src={`images_casino/dice${diceRoll}.png`} className='w-50 border' />
                <h4>Coins: {coins}</h4>
                <button onClick={() => {
                    if (coins == 0) {
                        setCoins(5);
                    }
                    else {
                        setDiceRoll(_.random(1, 6));
                        setCoins(diceRoll > 5 ? coins + 2 : coins - 1);
                    }
                }} className='btn btn-info'>{coins == 0 ? "Restart" : "Role"}</button>
                {diceRoll >= 5 && coins != 0 && <h2 className='text-success'>You win two coins!!!</h2>}
                    {coins == 0 && <h2 className='text-danger'>Game over!!!</h2>}
                </div>
        </div >
            )
}
