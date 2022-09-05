import './Game.css'
import Board from './Board/Board';
import { useState } from 'react';
function Game(props) {
    const [winnermessage,setWinnermessage]=useState('')
    const getWinner=(winner)=>{
        if(winner){
            setWinnermessage(`The winner is 👉🏻 ' ${winner} '`)
        }
    }
    return(
        <>
            <div className='game'>
                <div className='game_board'>
                    <Board getWinner={getWinner}/>
                </div>
                <div className='game_info'>
                    <div className='winnermessage'>{winnermessage}</div>
                </div>
            </div>
        </>
    )
}

export default Game;