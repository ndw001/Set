import "./NoSetButton.css";

function NoSetButton(props) {
  function checkNoSet() {
    const noSet = !props.checkBoardForSet();
    if (noSet) {
      props.setAlert("No Sets, Adding 3 More Cards");
      props.setDisplayRowFive(true);
    } else {
      props.setAlert("There is a Set");
      props.setPoints(props.points - 1);
    }
    console.log("No Set", noSet);
  }

  return (
    <button className="NoSetButton" onClick={checkNoSet}>
      {" "}
      No Set
    </button>
  );
}

export default NoSetButton;
