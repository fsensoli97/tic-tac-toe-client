import Board from "../Board/Board";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function PlayComputer({level}) {
    const [playAs, setPlayAs] = useState(1);

    return (
        <>
            <Link to={"/"}><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Link>
            
            <Board playComputer={true} level={level} playAs={2}></Board>
        </>
    );
}