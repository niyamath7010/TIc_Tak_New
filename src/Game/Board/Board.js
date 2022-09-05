import { useEffect, useState } from "react";
import Square from "./Square/Square";
import "../Board/Board.css"

function Board(props) {
    const[squares,setsqurares]=useState(Array(9).fill(null))
    const [xturn,setXturn]=useState(true)
    
    const callWinner=(is_turn)=>{
        let turnvalue=is_turn ? 'O' : 'X'
        console.log("counted",squares);
        if(squares[0]===turnvalue && squares[4]===turnvalue && squares[8]===turnvalue){
            props.getWinner(turnvalue)
            return;
        }
        if(squares[2]===turnvalue && squares[4]===turnvalue && squares[6]===turnvalue){
            props.getWinner(turnvalue)
            return;
        }
        if(squares[0]===turnvalue && squares[3]===turnvalue && squares[6]===turnvalue){
            props.getWinner(turnvalue)
            return;
        }
        if(squares[1]===turnvalue && squares[4]===turnvalue && squares[7]===turnvalue){
            props.getWinner(turnvalue)
            return;
        }
        if(squares[2]===turnvalue && squares[5]===turnvalue && squares[8]===turnvalue){
            props.getWinner(turnvalue)
            return;
        }
        if(squares[0]===turnvalue && squares[1]===turnvalue && squares[2]===turnvalue){
            props.getWinner(turnvalue)
            return;
        }
        if(squares[3]=== turnvalue && squares[4]=== turnvalue && squares[5]=== turnvalue){
            props.getWinner(turnvalue)
            return;
        }
        if(squares[6]===turnvalue && squares[7]===turnvalue && squares[8]===turnvalue){
            props.getWinner(turnvalue)
            return;
        }
        console.log("outside if" , turnvalue);
    } 
    useEffect(()=>{
        callWinner(xturn)
    },[squares])


    const handleClick=(i)=>{
        if(squares[i]===null){
            setXturn((turn)=>!turn)
        const square= squares.slice()
        if(xturn){
            square[i]='X';
        }else{
            square[i]='O';
        }
        setsqurares(()=>square)
        }
        else{
            alert("cant click again")
        }
        }


    const rendersquare=(i)=>{
        return <Square value={squares[i]} onClick={()=>{handleClick(i)}} /> 
    }

    
    const status=`Next Player: ${xturn ? '❌' : '⭕'} `
    
    return(
        <>
            <div className="status">{status}</div>
            <tr>
                <td>{rendersquare(0)}</td>
                <td>{rendersquare(1)}</td>
                <td>{rendersquare(2)}</td>
            </tr>
            <tr>
                <td>{rendersquare(3)}</td>
                <td>{rendersquare(4)}</td>
                <td>{rendersquare(5)}</td>
            </tr>
            <tr>
                <td>{rendersquare(6)}</td>
                <td>{rendersquare(7)}</td>
                <td>{rendersquare(8)}</td>
            </tr>
        </>
    )
}

export default Board;