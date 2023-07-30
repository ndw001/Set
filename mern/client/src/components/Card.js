import "./Card.css";
import Oval from "./Symbols/Oval";
import Diamond from "./Symbols/Diamond";
import Squiggle from "./Symbols/Squiggle";

function Card(props) {
  if (props.shape === "Oval") {
    return (
      <div className="Card">
        <div className="CardSymbol">
          <Oval color={props.color} count={props.count} shade={props.shade} />
        </div>
      </div>
    );
  } else if (props.shape === "Diamond") {
    return (
      <div className="Card">
        <div className="CardSymbol">
          <Diamond
            color={props.color}
            count={props.count}
            shade={props.shade}
          />
        </div>
      </div>
    );
  } else if (props.shape === "Squiggle") {
    return (
      <div className="Card">
        <div className="CardSymbol">
          <Squiggle
            color={props.color}
            count={props.count}
            shade={props.shade}
          />
        </div>
      </div>
    );
  }
}

export default Card;
