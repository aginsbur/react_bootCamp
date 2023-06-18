import React, { useState } from 'react'
import { random } from 'lodash';


export default function AppCasino() {
    const [diceRoll, setDiceRoll] = useState(1);
    const [coins, setCoins] = useState(5);
    const [msgOver, setMsgOver] = useState(false);
    const [msgWin, setMsgWin] = useState(false);
    const [msgLose, setMsgLose] = useState(false);

    const onRollClick = () => {
        if (coins == 0) {
            setCoins(5);
            setMsgOver(false);
            setMsgWin(false);
            setMsgLose(false);
        }
        else {
            setDiceRoll(random(1, 6));
            setCoins(diceRoll >= 5 ? coins + 2 : coins - 1);
            if (coins == 0) {
                setMsgOver(true);
                setMsgLose(false);
                setMsgWin(false);
            } else {
                if (diceRoll >= 5) {
                    setMsgWin(true);
                    setMsgLose(false);
                }
                else {
                    setMsgLose(true);
                    setMsgWin(false);
                }
            }


        }
    }

    return (
        <div className='container'>
            <div className='col-md-8 text-center shadow p-2 overflow-hidden h-300'>
                <h1 className='text-info'>Welcome to the casino!</h1>
                <img src={`images_casino/dice${diceRoll}.png`} className='w-50 border' />
                <h4>Coins: {coins}</h4>
                <button onClick={onRollClick} className='btn btn-info'>{coins == 0 ? "Restart" : "Role"}</button>
                {msgOver && <h2 className='text-danger'>Game over!!!</h2>}
                {msgWin && <h2 className='text-success'>You win two coins!!!</h2>}
                {msgLose && < h2 className='text-danger'>You lose one coin!!!</h2>}
            </div >
        </div >)
}

// import React, { useState,useContext } from 'react'
// import { random } from "lodash";

// import { AppContext } from '../context/context';

// export default function AppCasino() {
//   const {coins,setCoins} = useContext(AppContext);
//   const [num, setNum] = useState(1)
//   const [msg,setMsg] = useState("click to start")
//   const dice_ar = ["dice1.jpg", "dice2.jpg", "dice3.jpg", "dice4.jpg", "dice5.jpg", "dice6.jpg"];


//   const onRollClick = () => {
//     if(coins == 0){
//       return alert("Go to the bank bring money")
//     }
//     setCoins(coins-1)
//     setMsg("You lose")
//     let rnd = random(0,5);
//     setNum(rnd);
//     if(rnd >= 4){
//       setCoins(coins+1)
//       setMsg("You win!")
//     }
//   }

//   return (
//     <div className='container col-md-4 mx-auto py-4 border text-center'>
//       <img src={"/images/" + dice_ar[num]} alt="dice" className='w-25' />
//       <div>
//         <button className='m-2' onClick={onRollClick}>Roll dice</button>
//         <h2>{msg}</h2>
//         <h3>Coins: {coins}</h3>
//       </div>
//     </div>
//   )
// }

