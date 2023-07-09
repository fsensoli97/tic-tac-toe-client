function winOrStop(board, player) {
    /* if can win */
    /* rows */
    if ((board[0] === player && board[1] === player) && board[2] === null) return 2;
    if ((board[0] === player && board[2] === player) && board[1] === null) return 1;
    if ((board[1] === player && board[2] === player) && board[0] === null) return 0;

    if ((board[3] === player && board[4] === player) && board[5] === null) return 5;
    if ((board[3] === player && board[5] === player) && board[4] === null) return 4;
    if ((board[4] === player && board[5] === player) && board[3] === null) return 3;

    if ((board[6] === player && board[7] === player) && board[8] === null) return 8;
    if ((board[6] === player && board[8] === player) && board[7] === null) return 7;
    if ((board[7] === player && board[8] === player) && board[6] === null) return 6;

    /* columns */
    if ((board[0] === player && board[3] === player) && board[6] === null) return 6;
    if ((board[0] === player && board[6] === player) && board[3] === null) return 3;
    if ((board[3] === player && board[6] === player) && board[0] === null) return 0;

    if ((board[1] === player && board[4] === player) && board[7] === null) return 7;
    if ((board[1] === player && board[7] === player) && board[4] === null) return 4;
    if ((board[4] === player && board[7] === player) && board[1] === null) return 1;

    if ((board[2] === player && board[5] === player) && board[8] === null) return 8;
    if ((board[2] === player && board[8] === player) && board[5] === null) return 5;
    if ((board[5] === player && board[8] === player) && board[2] === null) return 2;

    /* cross */
    if ((board[0] === player && board[4] === player) && board[8] === null) return 8;
    if ((board[0] === player && board[8] === player) && board[4] === null) return 4;
    if ((board[4] === player && board[8] === player) && board[0] === null) return 0;

    if ((board[2] === player && board[4] === player) && board[6] === null) return 6;
    if ((board[2] === player && board[6] === player) && board[4] === null) return 4;
    if ((board[4] === player && board[6] === player) && board[2] === null) return 2;

    /* if must block opponent */
    /* rows */
    player === "X" ? player = "O" : player = "X";

    if ((board[0] === player && board[1] === player) && board[2] === null) return 2;
    if ((board[0] === player && board[2] === player) && board[1] === null) return 1;
    if ((board[1] === player && board[2] === player) && board[0] === null) return 0;

    if ((board[3] === player && board[4] === player) && board[5] === null) return 5;
    if ((board[3] === player && board[5] === player) && board[4] === null) return 4;
    if ((board[4] === player && board[5] === player) && board[3] === null) return 3;

    if ((board[6] === player && board[7] === player) && board[8] === null) return 8;
    if ((board[6] === player && board[8] === player) && board[7] === null) return 7;
    if ((board[7] === player && board[8] === player) && board[6] === null) return 6;

    /* columns */
    if ((board[0] === player && board[3] === player) && board[6] === null) return 6;
    if ((board[0] === player && board[6] === player) && board[3] === null) return 3;
    if ((board[3] === player && board[6] === player) && board[0] === null) return 0;

    if ((board[1] === player && board[4] === player) && board[7] === null) return 7;
    if ((board[1] === player && board[7] === player) && board[4] === null) return 4;
    if ((board[4] === player && board[7] === player) && board[1] === null) return 1;

    if ((board[2] === player && board[5] === player) && board[8] === null) return 8;
    if ((board[2] === player && board[8] === player) && board[5] === null) return 5;
    if ((board[5] === player && board[8] === player) && board[2] === null) return 2;

    /* cross */
    if ((board[0] === player && board[4] === player) && board[8] === null) return 8;
    if ((board[0] === player && board[8] === player) && board[4] === null) return 4;
    if ((board[4] === player && board[8] === player) && board[0] === null) return 0;

    if ((board[2] === player && board[4] === player) && board[6] === null) return 6;
    if ((board[2] === player && board[6] === player) && board[4] === null) return 4;
    if ((board[4] === player && board[6] === player) && board[2] === null) return 2;

    return -1;
}

export function computerMove(board, level) {

    let i;

    if (level === "easy") {    
        while (true) {
            i = Math.floor(Math.random() * 9);
            if (!board[i]) {
                break;
            }
        }
        return i;
    }
    

    if (level === "hard" || level === "intermediate") { 

        /* intermediate level: 25% random move */
        if (level === "intermediate" && Math.floor(Math.random() * 4) === 0) {
            do {
                i = Math.floor(Math.random() * 9);         
            } while(board[i] !== null);
            return i;
        }

        switch(board.filter((el) => el !== null).length) {
            case 1: {
                console.log("move 2");
                if (board[4] === "X") {
                    const aux = Math.floor(Math.random() * 4);
                    if (aux === 0) return 0;
                    if (aux === 1) return 2;
                    if (aux === 2) return 6;
                    if (aux === 3) return 8;
                }
                else return 4;
                break;
            }

            case 2: {
                console.log("move 3");
                if (board[4] === "X") {
                    if (board[1] === "O" || board[3] === "O" || board[5] === "O" || board[7] === "O") {
                        const aux = Math.floor(Math.random() * 4);
                        if (aux === 0) return 0;
                        if (aux === 1) return 2;
                        if (aux === 2) return 6;
                        if (aux === 3) return 8;
                    }
                    
                    if (board[0] === "O") return 8;
                    if (board[2] === "O") return 6;
                    if (board[6] === "O") return 2;
                    if (board[8] === "O") return 0;
                }

                if (board[0] === "X" && (board[4] === "O" || board[2] === "O" || board[6] === "O")) return 8;
                if (board[2] === "X" && (board[4] === "O" || board[0] === "O" || board[8] === "O")) return 6;
                if (board[6] === "X" && (board[4] === "O" || board[0] === "O" || board[8] === "O")) return 2;
                if (board[8] === "X" && (board[4] === "O" || board[2] === "O" || board[6] === "O")) return 0;

                return 4;
            }

            case 3: {
                console.log("move 4");
                const aux = winOrStop(board, "O");
                if (aux >= 0) return aux;

                if (board[0] === "X" && board[4] === "X" && board[8] === "O") {
                    const aux = Math.floor(Math.random() * 2);
                    if (aux === 0) return 2;
                    if (aux === 1) return 6;     
                }

                if (board[2] === "X" && board[4] === "X" && board[6] === "O") {
                    const aux = Math.floor(Math.random() * 2);
                    if (aux === 0) return 0;
                    if (aux === 1) return 8;     
                }

                if (board[6] === "X" && board[4] === "X" && board[2] === "O") {
                    const aux = Math.floor(Math.random() * 2);
                    if (aux === 0) return 0;
                    if (aux === 1) return 8;     
                }

                if (board[8] === "X" && board[4] === "X" && board[0] === "O") {
                    const aux = Math.floor(Math.random() * 2);
                    if (aux === 0) return 2;
                    if (aux === 1) return 6;     
                }

                while(true) {
                    let aux = Math.floor(Math.random() * 4);
                    if (aux === 0) aux = 1;
                    if (aux === 1) aux = 3;
                    if (aux === 2) aux = 5;
                    if (aux === 3) aux = 7;

                    if (board[aux] === null) return aux;
                }
            }   

            case 4: {
                console.log("move 5");
                const aux = winOrStop(board, "X");
                if (aux >= 0) return aux;

                if (board[4] === "X") {
                    if (board[0] === "X") {
                        if (board[1] === null && board[2] === null) return 2;
                        if (board[3] === null && board[6] === null) return 6;
                    }
                    if (board[2] === "X") {
                        if (board[0] === null && board[1] === null) return 0;
                        if (board[5] === null && board[8] === null) return 8;
                    }
                    if (board[6] === "X") {
                        if (board[0] === null && board[3] === null) return 0;
                        if (board[7] === null && board[8] === null) return 8;
                    }
                    if (board[8] === "X") {
                        if (board[2] === null && board[5] === null) return 2;
                        if (board[6] === null && board[7] === null) return 6;
                    }
                }

                console.log("incomplete algorithm");
                break;
            }

            case 5: {
                console.log("move 6");
                const aux = winOrStop(board, "O");
                if (aux >= 0) return aux;
                
                while(true) {
                    let i = Math.floor(Math.random() * 9);   
                    if (board[i] === null) return i;      
                }
            }

            case 6: {
                console.log("move 7");
                const aux = winOrStop(board, "X");
                if (aux >= 0) return aux;
                
                while(true) {
                    let i = Math.floor(Math.random() * 9);   
                    if (board[i] === null) return i;      
                }
            }

            case 7: {
                console.log("move 8");
                const aux = winOrStop(board, "O");
                if (aux >= 0) return aux;
                
                while(true) {
                    let i = Math.floor(Math.random() * 9);   
                    if (board[i] === null) return i;      
                }
            }

            case 8: {
                for (let j = 0; j < 9; j++) {
                    if (board[j] === null) return j;
                }
                break;
            }

            default:
                console.log("err??")
        }
    }
    return i;
}