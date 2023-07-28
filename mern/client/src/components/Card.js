import "./Card.css";
import Oval from "./Symbols/Oval";
import Diamond from "./Symbols/Diamond";
import Squiggle from "./Symbols/Squiggle";

function Card(props) {
  if (props.shape === "Oval") {
    return (
      <div className="Card">
        <div className="CardSymbol">
          <Oval />
        </div>
      </div>
    );
  } else if (props.shape === "Diamond") {
    return (
      <div className="Card">
        <div className="CardSymbol">
          <Diamond />
        </div>
      </div>
    );
  } else if (props.shape === "Squiggle") {
    return (
      <div className="Card">
        <div className="CardSymbol">
          <Squiggle />
        </div>
      </div>
    );
  }
}

export default Card;
