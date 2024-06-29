import { useState } from 'react'
import './App.css'
import { Header } from './components/Header';
import { Board } from './components/Board';

function App() {
  const [nextPlayer, setNextPlayer] = useState("X");
  const [hasWinner, setHasWinner] = useState(false);

  return (
    <>
      <Header nextPlayer={nextPlayer} hasWinner={hasWinner} />
      <Board nextPlayer={nextPlayer} setNextPlayer={setNextPlayer} hasWinner={hasWinner} setHasWinner={setHasWinner}/>
    </>
  )
}

export default App
