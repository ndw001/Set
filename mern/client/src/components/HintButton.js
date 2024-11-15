// import "./HintButton.css";

// function HintButton(props) {
//   function checkNoSet() {
//     const noSet = !props.checkBoardForSet();
//     if (noSet) {
//       props.setAlert("No Sets");
//     } else {
//       setTimeout(() => {
//         // Adding a delay to ensure state update
//         console.log("Inside Hint Button");
//         console.log("Inside ", props.hintCards);

//         props.toggleHighlite(props.hintCards[0], false, true);
//         // if first already green, load second, etc
//       }, 5000); // Adjust the delay as needed
//     }
//   }

//   return (
//     <button className="HintButton" onClick={checkNoSet}>
//       {" "}
//       Hint
//     </button>
//   );
// }
//
// export default HintButton;

import React, { useState, useEffect } from "react";
import "./HintButton.css";

function HintButton(props) {
  const [hintIndex, setHintIndex] = useState(0);
  const [currentHints, setCurrentHints] = useState([]);

  // useEffect(() => {
  //   if (hintIndex >= 0 && hintIndex < props.hintCards.length) {
  //     props.toggleHighlite(props.hintCards[hintIndex], true, true);
  //   }
  // }, [hintIndex, props.hintCards, props.toggleHighlite]);

  useEffect(() => {
    // If hintCards prop changes, update the hintIndex if needed
    // if (props.hintCards.length > 0 && hintIndex >= props.hintCards.length) {
    //   setHintIndex(0); // Reset hintIndex if it exceeds the length of hintCards
    // }
    setCurrentHints(props.hintCards);
  }, [props.hintCards, hintIndex]);

  function checkNoSet() {
    const noSet = !props.checkBoardForSet();

    if (noSet) {
      props.setAlert("No Sets");
    } else {
      console.log("Inside Hint Button");
      const nextHintIndex = (hintIndex + 1) % props.hintCards.length;
      if (hintIndex >= 0 && hintIndex < props.hintCards.length) {
        console.log("It should toggle");
        props.toggleHighlite(props.hintCards[hintIndex], false, true);
      }
      console.log("CHECK IT OUT ", currentHints);
      setHintIndex(nextHintIndex);
    }
  }

  return (
    <button className="HintButton" onClick={checkNoSet}>
      Hint
      {/* {console.log("These are hints at end of render", props.hintCards)} */}
    </button>
  );
}

export default HintButton;
