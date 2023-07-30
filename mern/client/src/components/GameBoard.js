import "./GameBoard.css";
import Card from "./Card";

function GameBoard() {
  const remainingDeck = {};
  const currentCards = {};
  // Shape, Color, Shade, Count
  return (
    <div className="GameBoard">
      <Card shape={"Oval"} color={"Red"} />
      <Card shape={"Diamond"} color={"Green"} />
      <Card shape={"Squiggle"} color={"Purple"} />
    </div>
  );
}

export default GameBoard;
