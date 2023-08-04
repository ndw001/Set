import "./GameBoard.css";
import Card from "./Card";
import { useState } from "react";
const _ = require("lodash");

function GameBoard() {
  const remainingDeck = {};
  const [selectedCards, setSelectedCards] = useState([]);
  // Shape, Color, Shade, Count

  // Oval, Diamond, Squiggle
  // Red, Green, Purple
  // Empty, Lines, Solid
  // One, Two, Three

  function checkSet(arrayOfCards) {
    const sameShape = arrayOfCards[0].shape === arrayOfCards[1].shape;
    const sameColor = arrayOfCards[0].color === arrayOfCards[1].color;
    const sameShade = arrayOfCards[0].shade === arrayOfCards[1].shade;
    const sameCount = arrayOfCards[0].count === arrayOfCards[1].count;
    if (
      !(
        (sameShape && arrayOfCards[1].shape === arrayOfCards[2].shape) ||
        (arrayOfCards[0].shape !== arrayOfCards[2].shape &&
          arrayOfCards[1].shape !== arrayOfCards[2].shape)
      )
    ) {
      // Not a Set Alert
      console.log("This is NOT a Set ");
      setSelectedCards([]);

      return;
    }
    if (
      !(
        (sameColor && arrayOfCards[1].color === arrayOfCards[2].color) ||
        (arrayOfCards[0].color !== arrayOfCards[2].color &&
          arrayOfCards[1].color !== arrayOfCards[2].color)
      )
    ) {
      // Not a Set Alert
      console.log("This is NOT a Set ");
      setSelectedCards([]);

      return;
    }

    if (
      !(
        (sameShade && arrayOfCards[1].shade === arrayOfCards[2].shade) ||
        (arrayOfCards[0].shade !== arrayOfCards[2].shade &&
          arrayOfCards[1].shade !== arrayOfCards[2].shade)
      )
    ) {
      // Not a Set Alert
      console.log("This is NOT a Set ");
      setSelectedCards([]);

      return;
    }

    if (
      !(
        (sameCount && arrayOfCards[1].count === arrayOfCards[2].count) ||
        (arrayOfCards[0].count !== arrayOfCards[2].count &&
          arrayOfCards[1].count !== arrayOfCards[2].count)
      )
    ) {
      // Not a Set Alert
      console.log("This is NOT a Set ");
      setSelectedCards([]);

      return;
    }

    // Set Alert
    console.log("This is a Set ");

    // Increase Point
    // Remove Cards from Board and add 3
    setSelectedCards([]);
    return;
  }

  function selectCard(cardObject) {
    const currentCards = selectedCards;
    for (let i = 0; i < selectedCards.length; i++) {
      if (_.isEqual(selectedCards[i], cardObject)) {
        currentCards.splice(i, 1);
        setSelectedCards(currentCards);
        return;
      }
    }
    currentCards.push(cardObject);
    setSelectedCards(currentCards);
    if (currentCards.length === 3) {
      checkSet(currentCards);
    }

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
