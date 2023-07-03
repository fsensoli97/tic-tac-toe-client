import Board from "../Board/Board";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import '../Board/Board.css'

export default function PassPlay() {
    return (
        <>
            <Link to={"/"}><FontAwesomeIcon className="homeIcon" icon={faHome}></FontAwesomeIcon></Link>
            <Board playComputer={false}></Board>
        </>
    );
}