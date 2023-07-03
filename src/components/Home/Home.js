import { Link } from "react-router-dom";
import { useState } from "react";
import './Home.css'

export default function Home({ setLevel }) {
    const [showLevel, setShowLevel] = useState(false);

    return (
        <>
            <div className="title">Welcome to tic-tac-toe.com<br></br>Let's play!</div>

            <div className="controlsCont">
                <div className="control"><Link to="/pass-and-play">Pass&Play</Link></div>

                <div className="control" onClick={() => setShowLevel(!showLevel)}>Play against computer</div>
                {showLevel ? <div className="levelCont">
                    <div className="levelControl"><Link to="/play-against-computer" onClick={() => setLevel("easy")}>Easy</Link></div>
                    <div className="levelControl"><Link to="/play-against-computer" onClick={() => setLevel("intermediate")}>Intermediate</Link></div>
                    <div className="levelControl"><Link to="/play-against-computer" onClick={() => setLevel("hard")}>Hard</Link></div></div>
                    : <></>}

                <div className="control"><Link to="/play-online">Play online</Link></div>
            </div>
        </>
    );
}