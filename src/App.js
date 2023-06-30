import './App.css';
import Home from './components/Home/Home';
import PlayComputer from './components/PlayComputer/PlayComputer';
import Board from './components/Board/Board';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [computerLevel, setComputerLevel] = useState("easy");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setLevel={setComputerLevel}></Home>}></Route>
          <Route path="/pass-and-play" element={<Board></Board>}></Route>
          <Route path="/play-against-computer" element={<PlayComputer level={computerLevel}></PlayComputer>}></Route>
          <Route path="/play-online" element={<></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
