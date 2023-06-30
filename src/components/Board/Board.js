import { useState, useEffect } from "react";
import './Board.css'

export default function Board({ playComputer, playAs, level}) {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (!playComputer) return;
        if (playAs !== 2) return;

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
    }, []);

    function computerTurn() {
        let i;
        if (level === "easy") {    
            while (true) {
                i = Math.floor(Math.random() * 9);
                if (!board[i]) {
                    break;
                }
            }
        }

        if (level === "hard") { 
            switch(board.filter((el) => el !== null).length) {
                case 1: {
                    console.log("move 2");
                    if (board[4] === "X") {
                        switch(Math.floor(Math.random() * 4)) {
                            case 0:
                                i = 0;
                                break;
                            case 1:
                                i = 2;
                                break;
                            case 2:
                                i = 6;
                                break;
                            case 3:
                                i = 8;
                                break;
                            default:
                                break;
                        }
                    }
                    else i = 4;
                    break;
                }

                case 2: {
                    console.log("move 3");
                    if (board[4] === "O" && board[1] === "O") i = 7;
                    else if (board[4] === "O" && board[3] === "O") i = 5;
                    else if (board[4] === "O" && board[5] === "O") i = 3;
                    else if (board[4] === "O" && board[7] === "O") i = 1;
                    else if (board[4] === "X") {
                        if (board[0] === "O") i = 8;
                        else if (board[2] === "O") i = 6;
                        else if (board[6] === "O") i = 2;
                        else if (board[8] === "O") i = 0;
                        else switch(Math.floor(Math.random() * 4)) {
                            case 0:
                                i = 0;
                                break;
                            case 1:
                                i = 2;
                                break;
                            case 2:
                                i = 6;
                                break;
                            case 3:
                                i = 8;
                                break;
                            default:
                                break;
                        }
                    }
                    else {
                        if (board[4] === "O" && board[0] === "X") i = 8;
                        else if (board[4] === "O" && board[2] === "X") i = 6;
                        else if (board[4] === "O" && board[6] === "X") i = 2;
                        else if (board[4] === "O" && board[8] === "X") i = 0;
                        else i = 4;
                    }
                    break;
                }

                case 3: {
                    console.log("move 4");
                    if (board[0] === "X" && board[1] === "X" && board[2] === null) i = 2;
                    else if (board[0] === "X" && board[2] === "X" && board[1] === null) i = 1;
                    else if (board[1] === "X" && board[2] === "X" && board[0] === null) i = 0;
                    
                    else if (board[0] === "X" && board[3] === "X" && board[6] === null) i = 6;
                    else if (board[0] === "X" && board[6] === "X" && board[3] === null) i = 3;
                    else if (board[3] === "X" && board[6] === "X" && board[0] === null) i = 0;

                    else if (board[2] === "X" && board[5] === "X" && board[8] === null) i = 8;
                    else if (board[5] === "X" && board[8] === "X" && board[2] === null) i = 2;
                    else if (board[2] === "X" && board[8] === "X" && board[5] === null) i = 5;

                    else if (board[6] === "X" && board[7] === "X" && board[8] === null) i = 8;
                    else if (board[6] === "X" && board[8] === "X" && board[7] === null) i = 7;
                    else if (board[7] === "X" && board[8] === "X" && board[6] === null) i = 6;

                    else if (board[0] === "X" && board[4] === "X" && board[8] === null) i = 8;
                    else if (board[0] === "X" && board[8] === "X" && board[4] === null) i = 4;
                    else if (board[4] === "X" && board[8] === "X" && board[0] === null) i = 0;

                    else if (board[2] === "X" && board[4] === "X" && board[6] === null) i = 6;
                    else if (board[2] === "X" && board[6] === "X" && board[4] === null) i = 4;
                    else if (board[4] === "X" && board[6] === "X" && board[2] === null) i = 2;
                    else if (board[0] === "X" && board[4] === "X" && board[8] === "O") {
                        switch(Math.floor(Math.random() * 2)) {
                            case 0:
                                i = 2;
                                break;
                            case 1:
                                i = 6;
                                break;
                            default:
                                break;
                        }
                    }
                    else if (board[2] === "X" && board[4] === "X" && board[6] === "O") {
                        switch(Math.floor(Math.random() * 2)) {
                            case 0:
                                i = 0;
                                break;
                            case 1:
                                i = 8;
                                break;
                            default:
                                break;
                        }
                    }
                    else if (board[6] === "X" && board[4] === "X" && board[2] === "O") {
                        switch(Math.floor(Math.random() * 2)) {
                            case 0:
                                i = 0;
                                break;
                            case 1:
                                i = 8;
                                break;
                            default:
                                break;
                        }
                    }
                    else if (board[8] === "X" && board[4] === "X" && board[0] === "O") {
                        switch(Math.floor(Math.random() * 2)) {
                            case 0:
                                i = 2;
                                break;
                            case 1:
                                i = 6;
                                break;
                            default:
                                break;
                        }
                    }
                    else do {
                        switch(Math.floor(Math.random() * 4)) {
                            case 0:
                                i = 1;
                                break;
                            case 1:
                                i = 3;
                                break;
                            case 2:
                                i = 5;
                                break;
                            case 3:
                                i = 7;
                                break;
                            default:
                                break;
                        }
                    } while(board[i] !== null)
                    break;
                }   

                case 4: {
                    console.log("move 5");
                    if (board[4] === "O" && board[1] === "O") i = 7;
                    else if (board[4] === "O" && board[3] === "O") i = 5;
                    else if (board[4] === "O" && board[5] === "O") i = 3;
                    else if (board[4] === "O" && board[7] === "O") i = 1;
                    else if (board[0] === "X" && board[1] === "X" && board[2] === null) i = 2;
                    else if (board[1] === "X" && board[2] === "X" && board[0] === null) i = 0;
                    else if (board[0] === "X" && board[3] === "X" && board[6] === null) i = 6;
                    else if (board[3] === "X" && board[6] === "X" && board[0] === null) i = 0;
                    else if (board[2] === "X" && board[5] === "X" && board[8] === null) i = 8;
                    else if (board[5] === "X" && board[8] === "X" && board[2] === null) i = 2;
                    else if (board[6] === "X" && board[7] === "X" && board[8] === null) i = 8;
                    else if (board[7] === "X" && board[8] === "X" && board[6] === null) i = 6;
                    else if (board[0] === "X" && board[4] === "X" && board[8] === null) i = 8;
                    else if (board[4] === "X" && board[8] === "X" && board[0] === null) i = 0;
                    else if (board[2] === "X" && board[4] === "X" && board[6] === null) i = 6;
                    else if (board[4] === "X" && board[6] === "X" && board[2] === null) i = 2;
                    else if (board[0] === "O" && board[1] === "O" && board[2] === null) i = 2;
                    else if (board[1] === "O" && board[2] === "O" && board[0] === null) i = 0;
                    else if (board[0] === "O" && board[3] === "O" && board[6] === null) i = 6;
                    else if (board[3] === "O" && board[6] === "O" && board[0] === null) i = 0;
                    else if (board[2] === "O" && board[5] === "O" && board[8] === null) i = 8;
                    else if (board[5] === "O" && board[8] === "O" && board[2] === null) i = 2;
                    else if (board[6] === "O" && board[7] === "O" && board[8] === null) i = 8;
                    else if (board[7] === "O" && board[8] === "O" && board[6] === null) i = 6;
                    else if (board[0] === "O" && board[4] === "O" && board[8] === null) i = 8;
                    else if (board[4] === "O" && board[8] === "O" && board[0] === null) i = 0;
                    else if (board[2] === "O" && board[4] === "O" && board[6] === null) i = 6;
                    else if (board[4] === "O" && board[6] === "O" && board[2] === null) i = 2;
                    else if (board[0] === "X" && board[1] === "O" && board[3] === null) i = 3;
                    else if (board[0] === "X" && board[3] === "O" && board[1] === null) i = 1;
                    else if (board[2] === "X" && board[1] === "O" && board[5] === null) i = 5;
                    else if (board[2] === "X" && board[5] === "O" && board[1] === null) i = 1;
                    else if (board[6] === "X" && board[3] === "O" && board[7] === null) i = 7;
                    else if (board[6] === "X" && board[7] === "O" && board[3] === null) i = 3;
                    else if (board[8] === "X" && board[7] === "O" && board[5] === null) i = 5;
                    else if (board[8] === "X" && board[5] === "O" && board[7] === null) i = 7;
                    else if (board[0] === "O" && board[1] === "O" && board[2] === null) i = 2;
                    else if (board[0] === "O" && board[2] === "O" && board[1] === null) i = 1;
                    else if (board[1] === "O" && board[2] === "O" && board[0] === null) i = 0;
                    
                    else if (board[0] === "O" && board[3] === "O" && board[6] === null) i = 6;
                    else if (board[0] === "O" && board[6] === "O" && board[3] === null) i = 3;
                    else if (board[3] === "O" && board[6] === "O" && board[0] === null) i = 0;

                    else if (board[2] === "O" && board[5] === "O" && board[8] === null) i = 8;
                    else if (board[5] === "O" && board[8] === "O" && board[2] === null) i = 2;
                    else if (board[2] === "O" && board[8] === "O" && board[5] === null) i = 5;

                    else if (board[6] === "O" && board[7] === "O" && board[8] === null) i = 8;
                    else if (board[6] === "O" && board[8] === "O" && board[7] === null) i = 7;
                    else if (board[7] === "O" && board[8] === "O" && board[6] === null) i = 6;

                    else if (board[0] === "O" && board[4] === "O" && board[8] === null) i = 8;
                    else if (board[0] === "O" && board[8] === "O" && board[4] === null) i = 4;
                    else if (board[4] === "O" && board[8] === "O" && board[0] === null) i = 0;

                    else if (board[2] === "O" && board[4] === "O" && board[6] === null) i = 6;
                    else if (board[2] === "O" && board[6] === "O" && board[4] === null) i = 4;
                    else if (board[4] === "O" && board[6] === "O" && board[2] === null) i = 2;
                    else (console.log("incomplete algorithm"));
                    break;
                }

                case 5: {
                    console.log("move 6");
                    if (board[0] === "O" && board[1] === "O" && board[2] === null) i = 2;
                    else if (board[0] === "O" && board[2] === "O" && board[1] === null) i = 1;
                    else if (board[1] === "O" && board[2] === "O" && board[0] === null) i = 0;
                    
                    else if (board[0] === "O" && board[3] === "O" && board[6] === null) i = 6;
                    else if (board[0] === "O" && board[6] === "O" && board[3] === null) i = 3;
                    else if (board[3] === "O" && board[6] === "O" && board[0] === null) i = 0;

                    else if (board[2] === "O" && board[5] === "O" && board[8] === null) i = 8;
                    else if (board[5] === "O" && board[8] === "O" && board[2] === null) i = 2;
                    else if (board[2] === "O" && board[8] === "O" && board[5] === null) i = 5;

                    else if (board[6] === "O" && board[7] === "O" && board[8] === null) i = 8;
                    else if (board[6] === "O" && board[8] === "O" && board[7] === null) i = 7;
                    else if (board[7] === "O" && board[8] === "O" && board[6] === null) i = 6;

                    else if (board[0] === "O" && board[4] === "O" && board[8] === null) i = 8;
                    else if (board[0] === "O" && board[8] === "O" && board[4] === null) i = 4;
                    else if (board[4] === "O" && board[8] === "O" && board[0] === null) i = 0;

                    else if (board[2] === "O" && board[4] === "O" && board[6] === null) i = 6;
                    else if (board[2] === "O" && board[6] === "O" && board[4] === null) i = 4;
                    else if (board[4] === "O" && board[6] === "O" && board[2] === null) i = 2;
                    
                    else if (board[0] === "X" && board[1] === "X" && board[2] === null) i = 2;
                    else if (board[0] === "X" && board[2] === "X" && board[1] === null) i = 1;
                    else if (board[1] === "X" && board[2] === "X" && board[0] === null) i = 0;
                    
                    else if (board[0] === "X" && board[3] === "X" && board[6] === null) i = 6;
                    else if (board[0] === "X" && board[6] === "X" && board[3] === null) i = 3;
                    else if (board[3] === "X" && board[6] === "X" && board[0] === null) i = 0;

                    else if (board[1] === "X" && board[4] === "X" && board[7] === null) i = 7;
                    else if (board[1] === "X" && board[7] === "X" && board[4] === null) i = 4;
                    else if (board[4] === "X" && board[7] === "X" && board[1] === null) i = 1;

                    else if (board[3] === "X" && board[4] === "X" && board[5] === null) i = 5;
                    else if (board[3] === "X" && board[5] === "X" && board[4] === null) i = 4;
                    else if (board[4] === "X" && board[5] === "X" && board[3] === null) i = 3;

                    else if (board[2] === "X" && board[5] === "X" && board[8] === null) i = 8;
                    else if (board[5] === "X" && board[8] === "X" && board[2] === null) i = 2;
                    else if (board[2] === "X" && board[8] === "X" && board[5] === null) i = 5;

                    else if (board[6] === "X" && board[7] === "X" && board[8] === null) i = 8;
                    else if (board[6] === "X" && board[8] === "X" && board[7] === null) i = 7;
                    else if (board[7] === "X" && board[8] === "X" && board[6] === null) i = 6;

                    else if (board[0] === "X" && board[4] === "X" && board[8] === null) i = 8;
                    else if (board[0] === "X" && board[8] === "X" && board[4] === null) i = 4;
                    else if (board[4] === "X" && board[8] === "X" && board[0] === null) i = 0;

                    else if (board[2] === "X" && board[4] === "X" && board[6] === null) i = 6;
                    else if (board[2] === "X" && board[6] === "X" && board[4] === null) i = 4;
                    else if (board[4] === "X" && board[6] === "X" && board[2] === null) i = 2;
                    
                    else do {
                        i = Math.floor(Math.random() * 9);         
                    } while(board[i] !== null);
                    break;
                }

                case 6: {
                    console.log("move 7");
                    if (board[0] === "X" && board[1] === "X" && board[2] === null) i = 2;
                    else if (board[0] === "X" && board[2] === "X" && board[1] === null) i = 1;
                    else if (board[1] === "X" && board[2] === "X" && board[0] === null) i = 0;
                    
                    else if (board[0] === "X" && board[3] === "X" && board[6] === null) i = 6;
                    else if (board[0] === "X" && board[6] === "X" && board[3] === null) i = 3;
                    else if (board[3] === "X" && board[6] === "X" && board[0] === null) i = 0;

                    else if (board[2] === "X" && board[5] === "X" && board[8] === null) i = 8;
                    else if (board[5] === "X" && board[8] === "X" && board[2] === null) i = 2;
                    else if (board[2] === "X" && board[8] === "X" && board[5] === null) i = 5;

                    else if (board[6] === "X" && board[7] === "X" && board[8] === null) i = 8;
                    else if (board[6] === "X" && board[8] === "X" && board[7] === null) i = 7;
                    else if (board[7] === "X" && board[8] === "X" && board[6] === null) i = 6;

                    else if (board[0] === "X" && board[4] === "X" && board[8] === null) i = 8;
                    else if (board[0] === "X" && board[8] === "X" && board[4] === null) i = 4;
                    else if (board[4] === "X" && board[8] === "X" && board[0] === null) i = 0;

                    else if (board[2] === "X" && board[4] === "X" && board[6] === null) i = 6;
                    else if (board[2] === "X" && board[6] === "X" && board[4] === null) i = 4;
                    else if (board[4] === "X" && board[6] === "X" && board[2] === null) i = 2;
                    
                    else if (board[0] === "O" && board[1] === "O" && board[2] === null) i = 2;
                    else if (board[0] === "O" && board[2] === "O" && board[1] === null) i = 1;
                    else if (board[1] === "O" && board[2] === "O" && board[0] === null) i = 0;
                    
                    else if (board[0] === "O" && board[3] === "O" && board[6] === null) i = 6;
                    else if (board[0] === "O" && board[6] === "O" && board[3] === null) i = 3;
                    else if (board[3] === "O" && board[6] === "O" && board[0] === null) i = 0;

                    else if (board[2] === "O" && board[5] === "O" && board[8] === null) i = 8;
                    else if (board[5] === "O" && board[8] === "O" && board[2] === null) i = 2;
                    else if (board[2] === "O" && board[8] === "O" && board[5] === null) i = 5;

                    else if (board[6] === "O" && board[7] === "O" && board[8] === null) i = 8;
                    else if (board[6] === "O" && board[8] === "O" && board[7] === null) i = 7;
                    else if (board[7] === "O" && board[8] === "O" && board[6] === null) i = 6;

                    else if (board[0] === "O" && board[4] === "O" && board[8] === null) i = 8;
                    else if (board[0] === "O" && board[8] === "O" && board[4] === null) i = 4;
                    else if (board[4] === "O" && board[8] === "O" && board[0] === null) i = 0;

                    else if (board[2] === "O" && board[4] === "O" && board[6] === null) i = 6;
                    else if (board[2] === "O" && board[6] === "O" && board[4] === null) i = 4;
                    else if (board[4] === "O" && board[6] === "O" && board[2] === null) i = 2;
                    else do {
                        i = Math.floor(Math.random() * 9);         
                    } while(board[i] !== null);
                    break;
                }

                case 7: {
                    console.log("move 8");
                    if (board[0] === "O" && board[1] === "O" && board[2] === null) i = 2;
                    else if (board[0] === "O" && board[2] === "O" && board[1] === null) i = 1;
                    else if (board[1] === "O" && board[2] === "O" && board[0] === null) i = 0;
                    
                    else if (board[0] === "O" && board[3] === "O" && board[6] === null) i = 6;
                    else if (board[0] === "O" && board[6] === "O" && board[3] === null) i = 3;
                    else if (board[3] === "O" && board[6] === "O" && board[0] === null) i = 0;

                    else if (board[2] === "O" && board[5] === "O" && board[8] === null) i = 8;
                    else if (board[5] === "O" && board[8] === "O" && board[2] === null) i = 2;
                    else if (board[2] === "O" && board[8] === "O" && board[5] === null) i = 5;

                    else if (board[6] === "O" && board[7] === "O" && board[8] === null) i = 8;
                    else if (board[6] === "O" && board[8] === "O" && board[7] === null) i = 7;
                    else if (board[7] === "O" && board[8] === "O" && board[6] === null) i = 6;

                    else if (board[0] === "O" && board[4] === "O" && board[8] === null) i = 8;
                    else if (board[0] === "O" && board[8] === "O" && board[4] === null) i = 4;
                    else if (board[4] === "O" && board[8] === "O" && board[0] === null) i = 0;

                    else if (board[2] === "O" && board[4] === "O" && board[6] === null) i = 6;
                    else if (board[2] === "O" && board[6] === "O" && board[4] === null) i = 4;
                    else if (board[4] === "O" && board[6] === "O" && board[2] === null) i = 2;
                    
                    else if (board[0] === "X" && board[1] === "X" && board[2] === null) i = 2;
                    else if (board[0] === "X" && board[2] === "X" && board[1] === null) i = 1;
                    else if (board[1] === "X" && board[2] === "X" && board[0] === null) i = 0;
                    
                    else if (board[0] === "X" && board[3] === "X" && board[6] === null) i = 6;
                    else if (board[0] === "X" && board[6] === "X" && board[3] === null) i = 3;
                    else if (board[3] === "X" && board[6] === "X" && board[0] === null) i = 0;

                    else if (board[1] === "X" && board[4] === "X" && board[7] === null) i = 7;
                    else if (board[1] === "X" && board[7] === "X" && board[4] === null) i = 4;
                    else if (board[4] === "X" && board[7] === "X" && board[1] === null) i = 1;

                    else if (board[3] === "X" && board[4] === "X" && board[5] === null) i = 5;
                    else if (board[3] === "X" && board[5] === "X" && board[4] === null) i = 4;
                    else if (board[4] === "X" && board[5] === "X" && board[3] === null) i = 3;

                    else if (board[2] === "X" && board[5] === "X" && board[8] === null) i = 8;
                    else if (board[5] === "X" && board[8] === "X" && board[2] === null) i = 2;
                    else if (board[2] === "X" && board[8] === "X" && board[5] === null) i = 5;

                    else if (board[6] === "X" && board[7] === "X" && board[8] === null) i = 8;
                    else if (board[6] === "X" && board[8] === "X" && board[7] === null) i = 7;
                    else if (board[7] === "X" && board[8] === "X" && board[6] === null) i = 6;

                    else if (board[0] === "X" && board[4] === "X" && board[8] === null) i = 8;
                    else if (board[0] === "X" && board[8] === "X" && board[4] === null) i = 4;
                    else if (board[4] === "X" && board[8] === "X" && board[0] === null) i = 0;

                    else if (board[2] === "X" && board[4] === "X" && board[6] === null) i = 6;
                    else if (board[2] === "X" && board[6] === "X" && board[4] === null) i = 4;
                    else if (board[4] === "X" && board[6] === "X" && board[2] === null) i = 2;
                    
                    else do {
                        i = Math.floor(Math.random() * 9);         
                    } while(board[i] !== null);
                    break;
                }

                case 8: {
                    for (let j = 0; j < 9; j++) {
                        if (board[j] === null) i = j;
                    }
                    break;
                }

                default:
                    console.log("err??")
            }
        }

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

    return (
        <>
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
        </>
    );
}