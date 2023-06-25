import { useState, useEffect } from "react";
import './Board.css'

export default function Board() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const [result, setResult] = useState(null);

    function clickHandle(idx) {
        if (result) return;
        if (board[idx]) return;

        let tmp = board;
        tmp[idx] = isX ? "X" : "O";
        setBoard(tmp); 

        if ((board[0] === board[1] && board[0] === board[2] && board[0]) ||
            (board[3] === board[4] && board[3] === board[5] && board[3]) ||
            (board[6] === board[7] && board[6] === board[8] && board[6]) ||
            (board[0] === board[3] && board[0] === board[6] && board[0]) ||
            (board[1] === board[4] && board[1] === board[7] && board[1]) ||
            (board[2] === board[5] && board[2] === board[8] && board[2]) ||
            (board[0] === board[4] && board[0] === board[8] && board[0]) ||
            (board[2] === board[4] && board[2] === board[6] && board[2])) 
            {
                setResult(isX ? "Player 1 wins!" : "Player 2 wins!");
            }

        if (board[0] && board[1] && board[2] && board[3] && board[4] && board[5] && board[6] && board[7] && board[8]) {
            setResult("Draw");
        }
        
        setIsX(!isX); 
    }

    function playAgain() {
        setBoard(Array(9).fill(null));
        setIsX(true);
        setResult(null);
    }

    return (
        <>
            {result ? result : isX ? "Player 1 turn" : "Player 2 turn"}

            <div className="board">
                <button className="cell" onClick={() => clickHandle(0)}>{board[0]}</button>
                <button className="cell" onClick={() => clickHandle(1)}>{board[1]}</button>
                <button className="cell" onClick={() => clickHandle(2)}>{board[2]}</button>
                <button className="cell" onClick={() => clickHandle(3)}>{board[3]}</button>
                <button className="cell" onClick={() => clickHandle(4)}>{board[4]}</button>
                <button className="cell" onClick={() => clickHandle(5)}>{board[5]}</button>
                <button className="cell" onClick={() => clickHandle(6)}>{board[6]}</button>
                <button className="cell" onClick={() => clickHandle(7)}>{board[7]}</button>
                <button className="cell" onClick={() => clickHandle(8)}>{board[8]}</button>
            </div>

            {result ? <button  onClick={playAgain}>Play again?</button> : <></>}
        </>
    );
}