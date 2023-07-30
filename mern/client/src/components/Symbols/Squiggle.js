import "./Squiggle.css";

function Squiggle(props) {
  return (
    <div className="Squiggle">
      <div className="Row" id="RowTop">
        <div className="Squiggle1" id={props.color} />
        <div className="Squiggle2" id={props.color} />
      </div>
      <div className="Row" id="RowBot">
        <div className="Squiggle3" id={props.color} />
        <div className="Squiggle4" id={props.color} />
      </div>
    </div>
  );
}

export default Squiggle;
