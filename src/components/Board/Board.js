import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import './Board.css'
import { computerMove } from "../../computerMove";

export default function Board({ playComputer, level }) {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const [result, setResult] = useState(null);
    const [playAs, setPlayAs] = useState(1);

    useEffect(() => {
        if (!playComputer) return;
        if (playAs !== 2) return;
        if (board[0] || board[1] || board[2] || board[3] || board[4] || board[5] || board[6] || board[7] || board[8]) return;

        console.log("computer level: " + level);

        let i;
        if (level === "easy") {
            i = Math.floor(Math.random() * 9);
        }

        if (level === "hard") {
            if (Math.floor(Math.random() * 2 + 1) % 2 === 0) {
                i = 4;
            }
            else {
                switch(Math.floor(Math.random() * 4)) {
                    case 0:
                        i = 0
                        break;

                    case 1:
                        i = 2
                        break;

                    case 2:
                        i = 6
                        break;

                    case 3:
                        i = 8
                        break;

                    default:
                        console.log("incorrect random generation!")
                        break;
                }
            }
        }

        let tmp = board.slice();
        tmp[i] = isX ? "X" : "O";
        setTimeout(() => {
            setBoard(() => tmp);
            setIsX(!isX);
        }, 1000);
    }, [playAs, board]);

    function computerTurn() {
        let i;
        i = computerMove(board, level);

        let tmp = board;
        tmp[i] = !isX ? "X" : "O";
        setBoard(() => tmp); 

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
            return;
        }

        if (board[0] && board[1] && board[2] && board[3] && board[4] && board[5] && board[6] && board[7] && board[8]) {
            setResult("Draw");
            return;
        }
        
        setIsX(isX);
    }

    function clickHandle(idx) {
        if (result) return;
        if (board[idx]) return;
        if (!isX && playAs === 1) return;
        if (isX && playAs === 2) return;

        let tmp = board;
        tmp[idx] = isX ? "X" : "O";
        console.log(tmp)
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
                return;
            }

        if (board[0] && board[1] && board[2] && board[3] && board[4] && board[5] && board[6] && board[7] && board[8]) {
            setResult("Draw");
            return;
        }
        
        setIsX(() => !isX);
        
        if (playComputer) {
            setTimeout(() => {
                computerTurn();
            }, 1000);    
        }
    }

    function playAgain() {
        setBoard(Array(9).fill(null));
        setIsX(true);
        setResult(null);
    }

    function handleRefresh() {
        setBoard(Array(9).fill(null));
        setIsX(true);
        setResult(null);
        setPlayAs(1);
    }

    return (
        <>
            <FontAwesomeIcon onClick={handleRefresh} className="refreshIcon" icon={faRefresh}></FontAwesomeIcon>

            <div className="currentPlayer">{result ? result : isX ? "Player 1 turn" : "Player 2 turn"}</div>

            <div className="board">
                <div className="cellRow">
                    <button className="cell" onClick={() => clickHandle(0)} style={board[0] === "X" ? {color: "red"} : {color: "#4c74ad"}}>{board[0]}</button>
                    <button className="cell" onClick={() => clickHandle(1)} style={board[1] === "X" ? {color: "red"} : {color: "#4c74ad"}}>{board[1]}</button>
                    <button className="cell" onClick={() => clickHandle(2)} style={board[2] === "X" ? {color: "red"} : {color: "#4c74ad"}}>{board[2]}</button>
                </div>
                <div className="cellRow">
                    <button className="cell" onClick={() => clickHandle(3)} style={board[3] === "X" ? {color: "red"} : {color: "#4c74ad"}}>{board[3]}</button>
                    <button className="cell" onClick={() => clickHandle(4)} style={board[4] === "X" ? {color: "red"} : {color: "#4c74ad"}}>{board[4]}</button>
                    <button className="cell" onClick={() => clickHandle(5)} style={board[5] === "X" ? {color: "red"} : {color: "#4c74ad"}}>{board[5]}</button>
                </div>
                <div className="cellRow">
                    <button className="cell" onClick={() => clickHandle(6)} style={board[6] === "X" ? {color: "red"} : {color: "#4c74ad"}}>{board[6]}</button>
                    <button className="cell" onClick={() => clickHandle(7)} style={board[7] === "X" ? {color: "red"} : {color: "#4c74ad"}}>{board[7]}</button>
                    <button className="cell" onClick={() => clickHandle(8)} style={board[8] === "X" ? {color: "red"} : {color: "#4c74ad"}}>{board[8]}</button>
                </div>
            </div>

            {result ? <div className="buttonCont"><button className="playAgain" onClick={playAgain}>Play again?</button></div> : <></>}
        
            {(playComputer && result) || (!board[0] && !board[1] && !board[2] && !board[3] && !board[4] && !board[5] && !board[6] && !board[7] && !board[8]) ? <div className="playAs">Play as: 
                <button className="playAsOption" onClick={() => setPlayAs(1)} style={playAs === 1 ? {opacity: 1, color: "#4c74ad"} : {opacity: 0.5, color: "#4c74ad"}}>X</button>
                <button className="playAsOption" onClick={() => setPlayAs(2)} style={playAs === 2 ? {opacity: 1, color: "red"} : {opacity: 0.5, color: "red"}}>O</button>
            </div> : <></>}
        </>
    );
}