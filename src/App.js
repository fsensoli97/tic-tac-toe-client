import './App.css';
import Home from './components/Home/Home';
import PlayComputer from './components/PlayComputer/PlayComputer';
import Board from './components/Board/Board';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import PassPlay from './components/PassPlay/PassPlay';
import PlayOnline from './components/PlayOnline/PlayOnline';

function App() {
  const [computerLevel, setComputerLevel] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setLevel={setComputerLevel}></Home>}></Route>
          <Route path="/pass-and-play" element={<PassPlay></PassPlay>}></Route>
          <Route path="/play-against-computer" element={<PlayComputer level={computerLevel} setLevel={setComputerLevel}></PlayComputer>}></Route>
          <Route path="/play-online" element={<PlayOnline></PlayOnline>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
