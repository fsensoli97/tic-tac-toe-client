import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default function() {
    return (
        <>
            <Link to={"/"}><FontAwesomeIcon className="homeIcon" icon={faHome}></FontAwesomeIcon></Link>
        </>
    );
}