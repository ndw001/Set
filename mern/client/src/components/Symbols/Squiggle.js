// import "./Squiggle.css";
import SquiggleRedLines from "./SVGs/Squiggle-Red-Lines.svg";
import SquiggleGreenLines from "./SVGs/Squiggle-Green-Lines.svg";
import SquigglePurpleLines from "./SVGs/Squiggle-Purple-Lines.svg";

import SquiggleRedEmpty from "./SVGs/Squiggle-Red-Empty.svg";
import SquiggleGreenEmpty from "./SVGs/Squiggle-Green-Empty.svg";
import SquigglePurpleEmpty from "./SVGs/Squiggle-Purple-Empty.svg";

import SquiggleRedSolid from "./SVGs/Squiggle-Red-Solid.svg";
import SquiggleGreenSolid from "./SVGs/Squiggle-Green-Solid.svg";
import SquigglePurpleSolid from "./SVGs/Squiggle-Purple-Solid.svg";

function Squiggle(props) {
  const sgvString = `Squiggle-${props.color}-Lines.svg`;
  if (props.fill === "Lines") {
    if (props.color === "Red") {
      return <img src={SquiggleRedLines} alt={sgvString} height="145" />;
    } else if (props.color === "Green") {
      return <img src={SquiggleGreenLines} alt={sgvString} height="145" />;
    } else if (props.color === "Purple") {
      return <img src={SquigglePurpleLines} alt={sgvString} height="145" />;
    }
  } else if (props.fill === "Empty") {
    if (props.color === "Red") {
      return <img src={SquiggleRedEmpty} alt={sgvString} height="145" />;
    } else if (props.color === "Green") {
      return <img src={SquiggleGreenEmpty} alt={sgvString} height="145" />;
    } else if (props.color === "Purple") {
      return <img src={SquigglePurpleEmpty} alt={sgvString} height="145" />;
    }
  } else if (props.fill === "Solid") {
    if (props.color === "Red") {
      return <img src={SquiggleRedSolid} alt={sgvString} height="145" />;
    } else if (props.color === "Green") {
      return <img src={SquiggleGreenSolid} alt={sgvString} height="145" />;
    } else if (props.color === "Purple") {
      return <img src={SquigglePurpleSolid} alt={sgvString} height="145" />;
    }
  }
}

export default Squiggle;
