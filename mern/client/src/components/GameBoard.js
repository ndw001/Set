import "./GameBoard.css";
import Card from "./Card";

function GameBoard() {
  const remainingDeck = {};
  const currentCards = {};
  // Shape, Color, Shade, Count
  // Oval, Diamond, Squiggle
  // Red, Green, Purple
  // Empty, Lines, Solid
  // One, Two, Three
  return (
    <div className="GameBoard">
      <Card shape={"Oval"} color={"Red"} fill={"Empty"} count={1} />
      <Card shape={"Oval"} color={"Green"} fill={"Solid"} count={2} />
      <Card shape={"Oval"} color={"Purple"} fill={"Lines"} count={3} />

      <Card shape={"Diamond"} color={"Red"} fill={"Empty"} count={1} />
      <Card shape={"Diamond"} color={"Green"} fill={"Lines"} count={2} />
      <Card shape={"Diamond"} color={"Purple"} fill={"Solid"} count={3} />

      <Card shape={"Squiggle"} color={"Red"} fill={"Empty"} count={1} />
      <Card shape={"Squiggle"} color={"Green"} fill={"Lines"} count={2} />
      <Card shape={"Squiggle"} color={"Purple"} fill={"Solid"} count={3} />
    </div>
  );
}

export default GameBoard;
