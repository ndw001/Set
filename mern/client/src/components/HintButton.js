import "./HintButton.css";

function HintButton(props) {
  function checkNoSet() {
    const noSet = !props.checkBoardForSet();
    if (noSet) {
      props.setAlert("No Sets");
    } else {
      // load/green first card
      // if first already green, load second, etc
    }
  }

  return (
    <button className="HintButton" onClick={checkNoSet}>
      {" "}
      Hint
    </button>
  );
}

export default HintButton;
