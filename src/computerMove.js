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
    return i;
}