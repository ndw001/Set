import "./GameBoard.css";
import Card from "./Card";
import Timer from "./Timer";
import NoSetButton from "./NoSetButton";
import HintButton from "./HintButton";

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
  const [hintCards, setHintCards] = useState([]);
  const [highlightedHintCards, setHighlightedHintCards] = useState([]);

  const [time, setTime] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [alert, setAlert] = useState("");
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const newOrder = createDeckOrder([]);
    setCurrentDeck(newOrder);

    // populates backwards
    // const noSetBoard = [2, 4, 3, 60, 10, 13, 69, 57, 75, 56, 18, 5];

    // const noSetBoard = [
    //   15, 16, 17, 66, 11, 6, 2, 4, 3, 60, 10, 13, 69, 57, 75, 56, 18, 5,
    // ];
    // setCurrentDeck(noSetBoard);
    // firstBoard(allCards, noSetBoard);
    firstBoard(allCards, newOrder);
    checkBoardForSet();
  }, []);

  useEffect(() => {
    if (displayRowFive) {
      setRowFive(getThreeCards(allCards, currentDeck));
    }
  }, [displayRowFive]);

  useEffect(() => {
    console.log("This is the HINT CARD ", hintCards);
  }, [hintCards]);

  function endCheck(isSet, cardOneNumber, cardTwoNumber, cardThreeNumber) {
    // console.log(" Inside endCheck RowFive ", rowFive);
    if (isSet) {
      if (currentDeck.length === 0) {
        setAlert("Finished Game");
      } else {
        if (displayRowFive) {
          for (let i = 0; i < 3; i++) {
            if (rowFive[i].cardNumber === cardOneNumber) {
              rowFive.pop();
              setRowFive(rowFive);
            } else if (rowFive[i].cardNumber === cardTwoNumber) {
              rowFive.pop();
              setRowFive(rowFive);
            } else if (rowFive[i].cardNumber === cardThreeNumber) {
              rowFive.pop();
              setRowFive(rowFive);
            }
          }
        }
        removeAndReplaceCard(cardOneNumber);
        removeAndReplaceCard(cardTwoNumber);
        removeAndReplaceCard(cardThreeNumber);
        setDisplayRowFive(false);
        setAlert("This is a Set");
        setPoints(points + 1);
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
    console.log("CARDNUMBER ", cardNumber);

    for (let i = 0; i < 3; i++) {
      console.log("SELECTED ROW ", selectedCards);

      if (rowOne[i].cardNumber === cardNumber) {
        console.log("ROW ONE i ", i, " ==== ", rowOne[i]);
        if (displayRowFive) {
          const oldRow = [...rowOne];
          console.log("This is the old Row ", oldRow);

          const oldRowFive = [...rowFive];
          console.log("This is the old RowFive ", oldRowFive);

          console.log(" $$$$ REPLACEMENT I ", i);
          const replacementCardNumber = rowFive.pop();
          console.log(" $$$$ REPLACEMENT ", replacementCardNumber);

          setRowFive(rowFive);
          const newCard = allCards.filter(
            (card) => card.cardNumber === replacementCardNumber.cardNumber
          )[0];
          rowOne.splice(i, 1, newCard);
          setRowOne(rowOne);

          console.log("REPLACEMENT ROW ONE ", rowOne);
        } else {
          const newCardNumber = currentDeck.pop();
          const newCard = allCards.filter(
            (card) => card.cardNumber === newCardNumber
          )[0];
          rowOne.splice(i, 1, newCard);
          setRowOne(rowOne);
        }
      } else if (rowTwo[i].cardNumber === cardNumber) {
        console.log("ROW TWO i ", i, " ==== ", rowTwo[i]);
        if (displayRowFive) {
          const oldRow = [...rowTwo];
          console.log("This is the old Row ", oldRow);

          const oldRowFive = [...rowFive];
          console.log("This is the old RowFive ", oldRowFive);

          const replacementCardNumber = rowFive.pop();
          console.log(" $$$$ REPLACEMENT ", replacementCardNumber);

          setRowFive(rowFive);
          const newCard = allCards.filter(
            (card) => card.cardNumber === replacementCardNumber.cardNumber
          )[0];
          rowTwo.splice(i, 1, newCard);
          setRowTwo(rowTwo);
          console.log("REPLACEMENT ROW TWO ", rowTwo);
        } else {
          const newCardNumber = currentDeck.pop();
          const newCard = allCards.filter(
            (card) => card.cardNumber === newCardNumber
          )[0];
          rowTwo.splice(i, 1, newCard);
          setRowTwo(rowTwo);
        }
      } else if (rowThree[i].cardNumber === cardNumber) {
        console.log("ROW THREE i ", i, " ==== ", rowThree[i]);
        if (displayRowFive) {
          const oldRow = [...rowThree];
          console.log("This is the old Row ", oldRow);

          const oldRowFive = [...rowFive];
          console.log("This is the old RowFive ", oldRowFive);

          const replacementCardNumber = rowFive.pop();
          console.log(" $$$$ REPLACEMENT ", replacementCardNumber);

          setRowFive(rowFive);
          const newCard = allCards.filter(
            (card) => card.cardNumber === replacementCardNumber.cardNumber
          )[0];
          rowThree.splice(i, 1, newCard);
          setRowThree(rowThree);
          console.log("REPLACEMENT ROW THREE ", rowThree);
        } else {
          const newCardNumber = currentDeck.pop();
          const newCard = allCards.filter(
            (card) => card.cardNumber === newCardNumber
          )[0];
          rowThree.splice(i, 1, newCard);
          setRowThree(rowThree);
        }
      } else if (rowFour[i].cardNumber === cardNumber) {
        console.log("ROW FOUR i ", i, " ==== ", rowFour[i]);
        if (displayRowFive) {
          const oldRow = [...rowFour];
          console.log("This is the old Row ", oldRow);

          const oldRowFive = [...rowFive];
          console.log("This is the old RowFive ", oldRowFive);

          const replacementCardNumber = rowFive.pop();
          console.log(" $$$$ REPLACEMENT ", replacementCardNumber);

          setRowFive(rowFive);
          const newCard = allCards.filter(
            (card) => card.cardNumber === replacementCardNumber.cardNumber
          )[0];
          rowFour.splice(i, 1, newCard);
          setRowFour(rowFour);
          console.log("REPLACEMENT ROW FOUR ", rowFour);
        } else {
          const newCardNumber = currentDeck.pop();
          const newCard = allCards.filter(
            (card) => card.cardNumber === newCardNumber
          )[0];
          rowFour.splice(i, 1, newCard);
          setRowFour(rowFour);
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
      endCheck(
        false,
        arrayOfCards[0].cardNumber,
        arrayOfCards[1].cardNumber,
        arrayOfCards[2].cardNumber
      );
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
      endCheck(
        false,
        arrayOfCards[0].cardNumber,
        arrayOfCards[1].cardNumber,
        arrayOfCards[2].cardNumber
      );
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
      endCheck(
        false,
        arrayOfCards[0].cardNumber,
        arrayOfCards[1].cardNumber,
        arrayOfCards[2].cardNumber
      );
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
      endCheck(
        false,
        arrayOfCards[0].cardNumber,
        arrayOfCards[1].cardNumber,
        arrayOfCards[2].cardNumber
      );
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

  function toggleHighlite(cardObject, isSelected, isHint) {
    console.log("hint cards state first ", hintCards);
    console.log("hint cards state second ", hintCards[0]);
    const cardId = `Card${cardObject.cardNumber}`;
    console.log("This is the cardID inside toggle highlite", cardId);

    const card = document.getElementById(cardId);
    console.log("This is the card inside toggle highlite", card);
    if (isSelected) {
      card.style.borderColor = "yellow";
      card.style.borderStyle = "solid";
    } else if (isHint) {
      card.style.borderColor = "green";
      card.style.borderStyle = "solid";
      card.classList.add("highlight-green");
    } else {
      card.style.borderColor = "";
      card.style.borderStyle = "";
      card.classList.remove("highlight-green");
    }
    console.log("This is the card to unselect : ", card);
  }

  function selectCard(cardObject) {
    setAlert("");
    const currentCards = selectedCards;
    toggleHighlite(cardObject, true);
    for (let i = 0; i < selectedCards.length; i++) {
      if (_.isEqual(selectedCards[i], cardObject)) {
        toggleHighlite(cardObject, false);
        currentCards.splice(i, 1);
        setSelectedCards(currentCards);
        return;
      }
    }
    console.log("Inside Select Card Current Cards: ", currentCards);
    currentCards.push(cardObject);
    setSelectedCards(currentCards);
    if (currentCards.length === 3) {
      for (let i = 0; i < selectedCards.length; i++) {
        toggleHighlite(selectedCards[i], false);
      }
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

      threeCards.push(
        currentDeck.filter((card) => card.cardNumber === searchFor)[0]
      );
    }
    return threeCards;
  }

  function populateRow(oneRow) {
    return (
      <div className="CardRow">
        {oneRow.map((card) => {
          return (
            <Card
              shape={card.shape}
              color={card.color}
              fill={card.fill}
              count={card.count}
              cardNumber={card.cardNumber}
              click={selectCard}
            />
          );
        })}
      </div>
    );
  }

  function firstBoard(allCards, currentDeck) {
    setRowOne(getThreeCards(allCards, currentDeck));
    setRowTwo(getThreeCards(allCards, currentDeck));
    setRowThree(getThreeCards(allCards, currentDeck));
    setRowFour(getThreeCards(allCards, currentDeck));
  }

  // console.log("ROW ONE ", rowOne);
  // console.log("ROW TWO ", rowTwo);
  // console.log("ROW THREE ", rowThree);
  // console.log("ROW FOUR ", rowFour);
  // console.log("ROW FIVE ", rowFive);

  // console.log("These are the cards CURRENT DECK ", currentDeck);

  function checkBoardForSet() {
    const fullBoard = rowOne.concat(rowTwo, rowThree, rowFour);
    // console.log("This is full board ", fullBoard);
    const setArray = [];
    for (let i = 0; i < fullBoard.length; i++) {
      for (let k = i; k < fullBoard.length; k++) {
        if (!(i === k)) {
          if (
            setArray.includes(fullBoard[i].cardNumber) ||
            setArray.includes(fullBoard[k].cardNumber)
          ) {
            const hintArray = [];
            hintArray.push(fullBoard[i]);
            hintArray.push(fullBoard[k]);

            // setHintCards(hintArray);
            setHintCards([...hintArray]);

            // console.log("This is the HINT ARRAY ", hintArray);
            // console.log("This is the HINT CARD ", hintCards);

            return true;
          } else {
            setArray.push(
              findThirdCardInSet([fullBoard[i], fullBoard[k]]).cardNumber
            );
            // console.log("This is the set Array", setArray);
          }
        }
      }
    }
    return false;
  }

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
      &nbsp;
      <HintButton
        setAlert={setAlert}
        hintCards={hintCards}
        setHighlightedHintCards={setHighlightedHintCards}
        checkBoardForSet={checkBoardForSet}
        toggleHighlite={toggleHighlite}
      />
      {/* {console.log("These are hints at end of render", hintCards)} */}
      {populateRow(rowOne)}
      {populateRow(rowTwo)}
      {populateRow(rowThree)}
      {populateRow(rowFour)}
      {displayRowFive && populateRow(rowFive)}
    </div>
  );
}

export default GameBoard;
