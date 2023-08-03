import "./Squiggle.css";

function Squiggle(props) {
  return (
    <div className="Squiggle">
      <div className="Row" id="RowTop">
        <div
          className="Squiggle1"
          id={`Squiggle1-${props.color}-${props.fill}`}
        />
        <div
          className="Squiggle2"
          id={`Squiggle2-${props.color}-${props.fill}`}
        />
      </div>
      <div className="Row" id="RowBot">
        <div
          className="Squiggle3"
          id={`Squiggle3-${props.color}-${props.fill}`}
        />
        <div
          className="Squiggle4"
          id={`Squiggle4-${props.color}-${props.fill}`}
        />
      </div>
    </div>
  );
}

export default Squiggle;
