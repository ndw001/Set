import "./Card.css";
import Oval from "./Symbols/Oval";
import Diamond from "./Symbols/Diamond";
import Squiggle from "./Symbols/Squiggle";

function Card(props) {
  if (props.shape === "Oval") {
    return (
      <div
        className="Card"
        onClick={() =>
          props.click(props.shape, props.color, props.fill, props.count)
        }
      >
        <div className="CardSymbol">
          {Array.from(Array(props.count)).map((x, index) => (
            <Oval color={props.color} count={props.count} fill={props.fill} />
          ))}
        </div>
      </div>
    );
  } else if (props.shape === "Diamond") {
    return (
      <div
        className="Card"
        onClick={() =>
          props.click(props.shape, props.color, props.fill, props.count)
        }
      >
        <div className="CardSymbol">
          {Array.from(Array(props.count)).map((x, index) => (
            <Diamond
              color={props.color}
              count={props.count}
              fill={props.fill}
            />
          ))}
        </div>
      </div>
    );
  } else if (props.shape === "Squiggle") {
    return (
      <div
        className="Card"
        onClick={() =>
          props.click(props.shape, props.color, props.fill, props.count)
        }
      >
        <div className="CardSymbol">
          {Array.from(Array(props.count)).map((x, index) => (
            <Squiggle
              color={props.color}
              count={props.count}
              fill={props.fill}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Card;
