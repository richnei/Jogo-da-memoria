import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";

export default function MemoryGame() {
  const [gameOver, setGameOver] = useState(false);

  function restart() {
    setGameOver(false);
  }
  return (
    <div>
        <GameBoard></GameBoard>
        <GameOver show={gameOver} handleRestart={restart}></GameOver>
    </div>
  ); 
}
