import "./GameBoard.css";
import Card from "./Card";
import { useState } from "react";

function GameBoard() {
  const remainingDeck = {};
  const [selectedCards, setSelectedCards] = useState([]);
  // Shape, Color, Shade, Count
  // Oval, Diamond, Squiggle
  // Red, Green, Purple
  // Empty, Lines, Solid
  // One, Two, Three

  function selectCard(shape, color, fill, count) {
    const currentCards = selectedCards;
    currentCards.push({ shape: shape, color: color, fill: fill, count: count });
    setSelectedCards(currentCards);
    console.log("These are current Cards ", currentCards);
  }

  return (
    <div className="GameBoard">
      <div className="CardRow">
        <Card
          className="Card"
          shape={"Oval"}
          color={"Red"}
          fill={"Empty"}
          count={1}
          click={selectCard}
        />
        <Card
          className="Card"
          shape={"Oval"}
          color={"Red"}
          fill={"Empty"}
          count={2}
          click={selectCard}
        />
        <Card
          className="Card"
          shape={"Oval"}
          color={"Red"}
          fill={"Empty"}
          count={3}
          click={selectCard}
        />

        <Card
          className="Card"
          shape={"Diamond"}
          color={"Red"}
          fill={"Empty"}
          count={1}
          click={selectCard}
        />
      </div>
      <div className="CardRow">
        <Card
          className="Card"
          shape={"Diamond"}
          color={"Green"}
          fill={"Lines"}
          count={1}
          click={selectCard}
        />
        <Card
          className="Card"
          shape={"Diamond"}
          color={"Purple"}
          fill={"Lines"}
          count={2}
          click={selectCard}
        />

        <Card
          className="Card"
          shape={"Diamond"}
          color={"Red"}
          fill={"Lines"}
          count={3}
          click={selectCard}
        />
        <Card
          className="Card"
          shape={"Squiggle"}
          color={"Green"}
          fill={"Lines"}
          count={2}
          click={selectCard}
        />
      </div>
      <div className="CardRow">
        <Card
          className="Card"
          shape={"Squiggle"}
          color={"Purple"}
          fill={"Solid"}
          count={1}
          click={selectCard}
        />
        <Card
          className="Card"
          shape={"Squiggle"}
          color={"Green"}
          fill={"Lines"}
          count={2}
          click={selectCard}
        />
        <Card
          className="Card"
          shape={"Squiggle"}
          color={"Red"}
          fill={"Empty"}
          count={3}
          click={selectCard}
        />
        <Card
          className="Card"
          shape={"Oval"}
          color={"Purple"}
          fill={"Solid"}
          count={3}
          click={selectCard}
        />
      </div>
    </div>
  );
}

export default GameBoard;
