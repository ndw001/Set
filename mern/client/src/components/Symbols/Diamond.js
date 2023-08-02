import "./Diamond.css";
import DiamondRedLines from "./Diamond-Red-Lines.svg";
import DiamondGreenLines from "./Diamond-Green-Lines.svg";
import DiamondPurpleLines from "./Diamond-Purple-Lines.svg";

function Diamond(props) {
  if (props.fill === "Lines") {
    const sgvString = `Diamond-${props.color}-Lines.svg`;
    if (props.color === "Red") {
      return <img src={DiamondRedLines} alt={sgvString} height="145" />;
    } else if (props.color === "Green") {
      return <img src={DiamondGreenLines} alt={sgvString} height="145" />;
    } else if (props.color === "Purple") {
      return <img src={DiamondPurpleLines} alt={sgvString} height="145" />;
    }
  } else {
    return <div id={`Diamond-${props.color}-${props.fill}`}></div>;
  }
}

export default Diamond;
