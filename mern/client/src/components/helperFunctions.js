function populateDeck() {
  const allCards = [];
  const shape = ["Oval", "Diamond", "Squiggle"];
  const color = ["Red", "Green", "Purple"];
  const fill = ["Empty", "Lines", "Solid"];
  const count = [1, 2, 3];
  let sampleCard = {
    shape: "",
    color: "",
    fill: "",
    count: 0,
    cardNumber: 0,
  };
  let cardNumber = 1;
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
      for (let h = 0; h < 3; h++) {
        for (let g = 0; g < 3; g++) {
          sampleCard.shape = shape[i];
          sampleCard.color = color[k];
          sampleCard.fill = fill[h];
          sampleCard.count = count[g];
          sampleCard.cardNumber = cardNumber;
          allCards.push(sampleCard);
          sampleCard = {
            shape: "",
            color: "",
            fill: "",
            count: 0,
            cardNumber: 0,
          };
          cardNumber += 1;
        }
      }
    }
  }
  return allCards;
}

export default populateDeck;
