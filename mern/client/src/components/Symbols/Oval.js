import "./Oval.css";

function Oval(props) {
  return <div className="Oval" id={`Oval-${props.color}-${props.fill}`}></div>;
}

export default Oval;
