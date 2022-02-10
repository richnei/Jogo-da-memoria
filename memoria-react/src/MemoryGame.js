import React, { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import game from "./game/game";

export default function MemoryGame() {
  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(game.createCardsFromEmojis());
  }, []);

  function restart() {
    game.clearCards();
    setCards(game.createCardsFromEmojis());
    setGameOver(false);
  }

  function handleFlip(card) {
    if (game.setCard(card.id)) {
      if (game.secondCard) {
        if (game.checkMatch()) {
          game.clearCards();
          if (game.checkGameOver()) {
            //GameOver
            setGameOver(true);
          }
        } else {
          setTimeout(() => {
            // No Match
            game.unflipCards();
            setCards([...game.cards]);
          }, 1000);
        }
      }
    }
    setCards([...game.cards]);
  }

  return (
    <div>
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      <GameOver show={gameOver} handleRestart={restart}></GameOver>
    </div>
  );
}
