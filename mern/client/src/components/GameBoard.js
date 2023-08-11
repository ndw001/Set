import "./GameBoard.css";
import Card from "./Card";
import Timer from "./Timer";
import NoSetButton from "./NoSetButton";

import { useState, useEffect } from "react";
import populateDeck from "./helperFunctions";

const _ = require("lodash");

function GameBoard(props) {
  const allCards = populateDeck();
  const [currentDeck, setCurrentDeck] = useState([]);
  const [rowOne, setRowOne] = useState([]);
  const [rowTwo, setRowTwo] = useState([]);
  const [rowThree, setRowThree] = useState([]);
  const [rowFour, setRowFour] = useState([]);
  const [displayRowFive, setDisplayRowFive] = useState(false);
  const [rowFive, setRowFive] = useState([]);

  const [time, setTime] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [alert, setAlert] = useState("");
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const newOrder = createDeckOrder([]);
    setCurrentDeck(newOrder);
    firstBoard(allCards, newOrder);
  }, []);

  function endCheck(isSet, cardOneNumber, cardTwoNumber, cardThreeNumber) {
    if (isSet) {
      if (displayRowFive) {
        setDisplayRowFive(false);
        // FILL IN CARDS
      } else {
        setAlert("This is a Set");
        setPoints(points + 1);
        removeAndReplaceCard(cardOneNumber);
        removeAndReplaceCard(cardTwoNumber);
        removeAndReplaceCard(cardThreeNumber);
        setSelectedCards([]);
      }
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
        } else if (displayRowFive && rowFive[i].cardNumber === cardNumber) {
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

  function checkSet(arrayOfCards, noSetCheck) {
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
      if (noSetCheck) {
        console.log(
          "Did no find a Set with ",
          arrayOfCards[0],
          arrayOfCards[1],
          arrayOfCards[2]
        );
        return false;
      } else {
        endCheck(false);
        return;
      }
    }
    if (
      !(
        (sameColor && arrayOfCards[1].color === arrayOfCards[2].color) ||
        (!sameColor &&
          arrayOfCards[0].color !== arrayOfCards[2].color &&
          arrayOfCards[1].color !== arrayOfCards[2].color)
      )
    ) {
      if (noSetCheck) {
        console.log(
          "Did no find a Set with ",
          arrayOfCards[0],
          arrayOfCards[1],
          arrayOfCards[2]
        );
        return false;
      } else {
        endCheck(false);
        return;
      }
    }

    if (
      !(
        (sameFill && arrayOfCards[1].fill === arrayOfCards[2].fill) ||
        (!sameFill &&
          arrayOfCards[0].fill !== arrayOfCards[2].fill &&
          arrayOfCards[1].fill !== arrayOfCards[2].fill)
      )
    ) {
      if (noSetCheck) {
        console.log(
          "Did no find a Set with ",
          arrayOfCards[0],
          arrayOfCards[1],
          arrayOfCards[2]
        );
        return false;
      } else {
        endCheck(false);
        return;
      }
    }

    if (
      !(
        (sameCount && arrayOfCards[1].count === arrayOfCards[2].count) ||
        (!sameCount &&
          arrayOfCards[0].count !== arrayOfCards[2].count &&
          arrayOfCards[1].count !== arrayOfCards[2].count)
      )
    ) {
      if (noSetCheck) {
        console.log(
          "Did no find a Set with ",
          arrayOfCards[0],
          arrayOfCards[1],
          arrayOfCards[2]
        );
        return false;
      } else {
        endCheck(false);
        return;
      }
    }

    if (noSetCheck) {
      console.log(
        "============ FOUND A Set with ",
        arrayOfCards[0],
        arrayOfCards[1],
        arrayOfCards[2]
      );
      return true;
    } else {
      endCheck(
        true,
        arrayOfCards[0].cardNumber,
        arrayOfCards[1].cardNumber,
        arrayOfCards[2].cardNumber
      );
      return;
    }
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
    if (deck.length < 81) {
      const newNum = Math.floor(Math.random() * 81) + 1;
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
      // console.log("This is the Rando Number ", searchFor);

      threeCards.push(
        currentDeck.filter((card) => card.cardNumber === searchFor)[0]
      );
    }
    return threeCards;
  }

  function populateRow(oneRow) {
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

  function firstBoard(allCards, currentDeck) {
    setRowOne(getThreeCards(allCards, currentDeck));
    setRowTwo(getThreeCards(allCards, currentDeck));
    setRowThree(getThreeCards(allCards, currentDeck));
    setRowFour(getThreeCards(allCards, currentDeck));
    if (displayRowFive) {
      setRowFive(getThreeCards(allCards, currentDeck));
    }
  }

  // console.log("ROW ONE ", rowOne);
  // console.log("ROW TWO ", rowTwo);
  // console.log("ROW THREE ", rowThree);
  // console.log("ROW FOUR ", rowFour);
  // console.log("ROW FIVE ", rowFive);

  // console.log("These are the cards CURRENT DECK ", currentDeck);

  function checkBoardForSet() {
    const fullBoard = rowOne.concat(rowTwo, rowThree, rowFour);
    console.log("This is full board ", fullBoard);
    const setArray = [];
    for (let i = 0; i < fullBoard.length; i++) {
      for (let k = i; k < fullBoard.length; k++) {
        console.log("Okay ", i, " k ", k);

        if (!(i === k)) {
          console.log("Okay ", i, " k ", k);

          if (
            setArray.includes(fullBoard[i].cardNumber) ||
            setArray.includes(fullBoard[k].cardNumber)
          ) {
            console.log(" This is the Set ", fullBoard[i], fullBoard[k]);
            console.log("Wrong");

            return true;
          } else {
            console.log("Right");

            setArray.push(
              findThirdCardInSet([fullBoard[i], fullBoard[k]]).cardNumber
            );
          }
        }
      }
    }
    console.log("This is the setArray", setArray);
    return false;

    // const columnOne = [rowOne[0], rowTwo[0], rowThree[0], rowFour[0]];
    // const columnTwo = [rowOne[1], rowTwo[1], rowThree[1], rowFour[1]];
    // const columnThree = [rowOne[2], rowTwo[2], rowThree[2], rowFour[2]];
    // // Inter Column

    // // Across Columns
    // for (let i = 0; i < 4; i++) {
    //   for (let k = 0; k < 4; k++) {
    //     for (let g = 0; g < 4; g++) {
    //       if (checkSet([columnOne[i], columnTwo[k], columnThree[g]], true)) {
    //         return true;
    //       }
    //     }
    //   }
    // }
    // return false;
  }

  // checkBoardForSet();

  function findThirdCardInSet(arrayofTwoCards) {
    const allShape = ["Oval", "Diamond", "Squiggle"];
    const allColor = ["Red", "Green", "Purple"];
    const allFill = ["Empty", "Lines", "Solid"];
    const allCount = [1, 2, 3];

    const thirdCard = {};

    if (arrayofTwoCards[0].shape === arrayofTwoCards[1].shape) {
      thirdCard.shape = arrayofTwoCards[0].shape;
    } else {
      thirdCard.shape = allShape.filter(
        (value) =>
          ![arrayofTwoCards[0].shape, arrayofTwoCards[1].shape].includes(value)
      )[0];
    }

    if (arrayofTwoCards[0].color === arrayofTwoCards[1].color) {
      thirdCard.color = arrayofTwoCards[0].color;
    } else {
      thirdCard.color = allColor.filter(
        (value) =>
          ![arrayofTwoCards[0].color, arrayofTwoCards[1].color].includes(value)
      )[0];
    }

    if (arrayofTwoCards[0].fill === arrayofTwoCards[1].fill) {
      thirdCard.fill = arrayofTwoCards[0].fill;
    } else {
      thirdCard.fill = allFill.filter(
        (value) =>
          ![arrayofTwoCards[0].fill, arrayofTwoCards[1].fill].includes(value)
      )[0];
    }

    if (arrayofTwoCards[0].count === arrayofTwoCards[1].count) {
      thirdCard.count = arrayofTwoCards[0].count;
    } else {
      thirdCard.count = allCount.filter(
        (value) =>
          ![arrayofTwoCards[0].count, arrayofTwoCards[1].count].includes(value)
      )[0];
    }

    return allCards.find(
      (card) =>
        card.shape === thirdCard.shape &&
        card.color === thirdCard.color &&
        card.fill === thirdCard.fill &&
        card.count === thirdCard.count
    );
  }

  // console.log("ALL CARDS ", allCards);

  return (
    <div className="GameBoard">
      <div>Remaining Cards: {currentDeck.length}</div>
      <Timer time={time} setTime={setTime} />
      <div className="Points">Points: {points} </div>
      <div className="Alerts">{alert}</div>
      <NoSetButton
        setAlert={setAlert}
        setDisplayRowFive={setDisplayRowFive}
        checkBoardForSet={checkBoardForSet}
        points={points}
        setPoints={setPoints}
      />

      {populateRow(rowOne)}
      {populateRow(rowTwo)}
      {populateRow(rowThree)}
      {populateRow(rowFour)}
      {displayRowFive && populateRow(rowFive)}
    </div>
  );
}

export default GameBoard;
