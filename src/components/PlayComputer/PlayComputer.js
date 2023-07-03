import Board from "../Board/Board";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './PlayComputer.css'

export default function PlayComputer({level, setLevel}) {

    return (
        <>
            <Link to={"/"}><FontAwesomeIcon className="homeIcon" icon={faHome}></FontAwesomeIcon></Link>
            <Board playComputer={true} level={level}></Board>
            <div className="computerLevel">Computer level: 
                <span className="level" onClick={() => setLevel("easy")} style={level === "easy" ? {opacity: 1, color: "green"} : {opacity: 0.4, color: "green"}}>Easy</span>
                <span className="level" onClick={() => setLevel("intermediate")} style={level === "intermediate" ? {opacity: 1, color: "yellow"} : {opacity: 0.4, color: "yellow"}}>Intermediate</span>
                <span className="level" onClick={() => setLevel("hard")} style={level === "hard" ? {opacity: 1, color: "red"} : {opacity: 0.4, color: "red"}}>Hard</span>
            </div>
        </>
    );
}