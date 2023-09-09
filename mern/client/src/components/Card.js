import "./Card.css";
import Oval from "./Symbols/Oval";
import Diamond from "./Symbols/Diamond";
import Squiggle from "./Symbols/Squiggle";

function Card(props) {
  if (props.shape === "Oval") {
    const idString = `Card${props.cardNumber}`;
    return (
      <div
        className="Card"
        id={idString}
        onClick={() => {
          const cardObject = {
            shape: props.shape,
            color: props.color,
            fill: props.fill,
            count: props.count,
            cardNumber: props.cardNumber,
          };
          props.click(cardObject);
        }}
      >
        <div className="CardSymbol">
          {Array.from(Array(props.count)).map((x, index) => (
            <Oval color={props.color} count={props.count} fill={props.fill} />
          ))}
        </div>
      </div>
    );
  } else if (props.shape === "Diamond") {
    const idString = `Card${props.cardNumber}`;
    return (
      <div
        className="Card"
        id={idString}
        onClick={() => {
          const cardObject = {
            shape: props.shape,
            color: props.color,
            fill: props.fill,
            count: props.count,
            cardNumber: props.cardNumber,
          };
          props.click(cardObject);
        }}
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
    const idString = `Card${props.cardNumber}`;
    return (
      <div
        className="Card"
        id={idString}
        onClick={() => {
          const cardObject = {
            shape: props.shape,
            color: props.color,
            fill: props.fill,
            count: props.count,
            cardNumber: props.cardNumber,
          };
          props.click(cardObject);
        }}
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
