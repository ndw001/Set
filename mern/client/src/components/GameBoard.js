import "./GameBoard.css";
import Card from "./Card";
import { useState } from "react";

const _ = require("lodash");

function GameBoard(props) {
  const remainingDeck = {};
  const [selectedCards, setSelectedCards] = useState([]);
  const [alert, setAlert] = useState("");
  const [points, setPoints] = useState(0);

  function endCheck(isSet) {
    if (isSet) {
      setAlert("This is a Set");
      setPoints(points + 1);
      // Remove Cards from Board and add 3
      setSelectedCards([]);
    } else {
      setAlert("This is NOT a Set");
      setPoints(points - 1);
      setSelectedCards([]);

      return;
    }
  }

  function checkSet(arrayOfCards) {
    const sameShape = arrayOfCards[0].shape === arrayOfCards[1].shape;
    const sameColor = arrayOfCards[0].color === arrayOfCards[1].color;
    const sameShade = arrayOfCards[0].shade === arrayOfCards[1].shade;
    const sameCount = arrayOfCards[0].count === arrayOfCards[1].count;
    if (
      !(
        (sameShape && arrayOfCards[1].shape === arrayOfCards[2].shape) ||
        (!sameShape &&
          arrayOfCards[0].shape !== arrayOfCards[2].shape &&
          arrayOfCards[1].shape !== arrayOfCards[2].shape)
      )
    ) {
      endCheck(false);
      return;
    }
    if (
      !(
        (sameColor && arrayOfCards[1].color === arrayOfCards[2].color) ||
        (!sameColor &&
          arrayOfCards[0].color !== arrayOfCards[2].color &&
          arrayOfCards[1].color !== arrayOfCards[2].color)
      )
    ) {
      endCheck(false);
      return;
    }

    if (
      !(
        (sameShade && arrayOfCards[1].shade === arrayOfCards[2].shade) ||
        (!sameShade &&
          arrayOfCards[0].shade !== arrayOfCards[2].shade &&
          arrayOfCards[1].shade !== arrayOfCards[2].shade)
      )
    ) {
      endCheck(false);
      return;
    }

    if (
      !(
        (sameCount && arrayOfCards[1].count === arrayOfCards[2].count) ||
        (!sameCount &&
          arrayOfCards[0].count !== arrayOfCards[2].count &&
          arrayOfCards[1].count !== arrayOfCards[2].count)
      )
    ) {
      endCheck(false);
      return;
    }
    console.log(
      "All the colors ",
      arrayOfCards[0].color !== arrayOfCards[1].color,
      arrayOfCards[1].color !== arrayOfCards[2].color,
      arrayOfCards[2].color !== arrayOfCards[0].color
    );
    endCheck(true);
    return;
  }

  function selectCard(cardObject) {
    setAlert("");
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
      <div className="Points">Points: {points} </div>
      <div className="Alerts">{alert}</div>
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
