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
      <Card shape={"Oval"} color={"Red"} fill={"Lines"} />
      <Card shape={"Oval"} color={"Green"} fill={"Solid"} />
      <Card shape={"Oval"} color={"Purple"} fill={"Lines"} />

      <Card shape={"Diamond"} color={"Red"} fill={"Lines"} />
      <Card shape={"Diamond"} color={"Green"} fill={"Lines"} />
      <Card shape={"Diamond"} color={"Purple"} fill={"Lines"} />

      <Card shape={"Squiggle"} color={"Red"} fill={"Solid"} />
      <Card shape={"Squiggle"} color={"Green"} fill={"Empty"} />
      <Card shape={"Squiggle"} color={"Purple"} fill={"Solid"} />
    </div>
  );
}

export default GameBoard;
