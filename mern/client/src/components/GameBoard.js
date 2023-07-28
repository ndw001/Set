import "./GameBoard.css";
import Card from "./Card";

function GameBoard() {
  const remainingDeck = {};
  const currentCards = {};
  return (
    <div className="GameBoard">
      <Card shape={"Oval"} />
      <Card shape={"Diamond"} />
      <Card shape={"Squiggle"} />
    </div>
  );
}

export default GameBoard;
