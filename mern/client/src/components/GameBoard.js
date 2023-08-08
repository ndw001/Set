import "./GameBoard.css";
import Card from "./Card";
import { useState, useEffect } from "react";
import populateDeck from "./helperFunctions";

const _ = require("lodash");

function GameBoard(props) {
  const allCards = populateDeck();
  const currentDeck = createDeckOrder([]);
  // const [currentDeck, setCurrentDeck] = useState([]);
  const [rowOne, setRowOne] = useState([]);
  const [rowTwo, setRowTwo] = useState([]);
  const [rowThree, setRowThree] = useState([]);
  const [rowFour, setRowFour] = useState([]);
  const [rowFive, setRowFive] = useState([]);

  const [selectedCards, setSelectedCards] = useState([]);
  const [alert, setAlert] = useState("");
  const [points, setPoints] = useState(0);

  useEffect(() => {
    // const newOrder = createDeckOrder([]);
    // setCurrentDeck(newOrder);
    firstBoard();
  }, []);

  function endCheck(isSet, cardOneNumber, cardTwoNumber, cardThreeNumber) {
    if (isSet) {
      setAlert("This is a Set");
      setPoints(points + 1);
      removeAndReplaceCard(cardOneNumber);
      removeAndReplaceCard(cardTwoNumber);
      removeAndReplaceCard(cardThreeNumber);
      setSelectedCards([]);
    } else {
      setAlert("This is NOT a Set");
      setPoints(points - 1);
      setSelectedCards([]);

      return;
    }
  }

  function removeAndReplaceCard(cardNumber) {
    let found = 0;
    if (found !== 3) {
      for (let i = 0; i < 3; i++) {
        if (rowOne[i].cardNumber === cardNumber) {
          const newCardNumber = currentDeck.pop();
          const newCard = allCards.filter(
            (card) => card.cardNumber === newCardNumber
          )[0];
          rowOne.splice(i, 1, newCard);
          setRowOne(rowOne);
          found += 1;
        } else if (rowTwo[i].cardNumber === cardNumber) {
          const newCardNumber = currentDeck.pop();
          const newCard = allCards.filter(
            (card) => card.cardNumber === newCardNumber
          )[0];
          rowTwo.splice(i, 1, newCard);
          setRowTwo(rowTwo);
          found += 1;
        } else if (rowThree[i].cardNumber === cardNumber) {
          const newCardNumber = currentDeck.pop();
          const newCard = allCards.filter(
            (card) => card.cardNumber === newCardNumber
          )[0];
          rowThree.splice(i, 1, newCard);
          setRowThree(rowThree);
          found += 1;
        } else if (rowFour[i].cardNumber === cardNumber) {
          const newCardNumber = currentDeck.pop();
          const newCard = allCards.filter(
            (card) => card.cardNumber === newCardNumber
          )[0];
          rowFour.splice(i, 1, newCard);
          setRowFour(rowFour);
          found += 1;
        } else if (rowFive[i].cardNumber === cardNumber) {
          const newCardNumber = currentDeck.pop();
          const newCard = allCards.filter(
            (card) => card.cardNumber === newCardNumber
          )[0];
          rowFive.splice(i, 1, newCard);
          setRowFive(rowFive);
          found += 1;
        }
      }
    }
  }

  function checkSet(arrayOfCards) {
    const sameShape = arrayOfCards[0].shape === arrayOfCards[1].shape;
    const sameColor = arrayOfCards[0].color === arrayOfCards[1].color;
    const sameFill = arrayOfCards[0].fill === arrayOfCards[1].fill;
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
        (sameFill && arrayOfCards[1].fill === arrayOfCards[2].fill) ||
        (!sameFill &&
          arrayOfCards[0].fill !== arrayOfCards[2].fill &&
          arrayOfCards[1].fill !== arrayOfCards[2].fill)
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
    endCheck(
      true,
      arrayOfCards[0].cardNumber,
      arrayOfCards[1].cardNumber,
      arrayOfCards[2].cardNumber
    );
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
  }

  function createDeckOrder(deck) {
    if (deck.length < 82) {
      // WHY DOES 81 NOT WORK
      const newNum = Math.floor(Math.random() * 82) + 1;
      if (deck.find((num) => num === newNum)) {
        createDeckOrder(deck);
      } else {
        deck.push(newNum);
        createDeckOrder(deck);
        return deck;
      }
    } else {
      return deck;
    }
  }

  function getThreeCards(currentDeck, deckOrder) {
    const threeCards = [];
    for (let k = 0; k < 3; k++) {
      const searchFor = deckOrder.pop();
      threeCards.push(
        currentDeck.filter((card) => card.cardNumber === searchFor)[0]
      );
    }
    return threeCards;
  }

  function populateRow(oneRow, num) {
    return (
      <div className="CardRow">
        {oneRow.map((card) => (
          <Card
            className="Card"
            shape={card.shape}
            color={card.color}
            fill={card.fill}
            count={card.count}
            cardNumber={card.cardNumber}
            click={selectCard}
          />
        ))}
      </div>
    );
  }

  function firstBoard() {
    setRowOne(getThreeCards(allCards, currentDeck));
    setRowTwo(getThreeCards(allCards, currentDeck));
    setRowThree(getThreeCards(allCards, currentDeck));
    setRowFour(getThreeCards(allCards, currentDeck));
    setRowFive(getThreeCards(allCards, currentDeck));
  }

  console.log("These are the cards ", allCards);

  return (
    <div className="GameBoard">
      <div className="Points">Points: {points} </div>
      <div className="Alerts">{alert}</div>
      {populateRow(rowOne, 1)}
      {populateRow(rowTwo, 2)}
      {populateRow(rowThree, 3)}
      {populateRow(rowFour, 4)}
      {populateRow(rowFive, 5)}
    </div>
  );
}

export default GameBoard;
