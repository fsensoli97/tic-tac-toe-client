import Board from "../Board/Board";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './PlayComputer.css'

export default function PlayComputer({level}) {
    const [playAs, setPlayAs] = useState(1);

    return (
        <>
            <Link to={"/"}><FontAwesomeIcon className="homeIcon" icon={faHome}></FontAwesomeIcon></Link>
            
            <Board playComputer={true} level={level} playAs={2}></Board>
        </>
    );
}