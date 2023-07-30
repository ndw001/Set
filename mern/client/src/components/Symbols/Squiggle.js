import "./Squiggle.css";

function Squiggle(props) {
  // FIX SQUIGGLE EMPTY AND LINES
  return (
    <div className="Squiggle">
      <div className="Row" id="RowTop">
        <div className="Squiggle1" id={`${props.color}-${props.fill}`} />
        <div className="Squiggle2" id={`${props.color}-${props.fill}`} />
      </div>
      <div className="Row" id="RowBot">
        <div className="Squiggle3" id={`${props.color}-${props.fill}`} />
        <div className="Squiggle4" id={`${props.color}-${props.fill}`} />
      </div>
    </div>
  );
}

export default Squiggle;
