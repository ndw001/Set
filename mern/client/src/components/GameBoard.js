import "./GameBoard.css";
import Card from "./Card";

function GameBoard() {
  const remainingDeck = {};
  const currentCards = {};
  // Shape, Color, Shade, Count
  // Oval, Diamond, Squiggle
  // Red Green Purple
  // Empty, Lines, Solid
  // One, Two, Three
  return (
    <div className="GameBoard">
      <Card shape={"Oval"} color={"Red"} fill={"Empty"} />
      <Card shape={"Diamond"} color={"Green"} fill={"Empty"} />
      <Card shape={"Squiggle"} color={"Purple"} fill={"Empty"} />
    </div>
  );
}

export default GameBoard;
