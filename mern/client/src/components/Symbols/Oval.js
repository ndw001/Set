import "./Oval.css";

function Oval(props) {
  return <div className="Oval" id={`${props.color}-${props.fill}`}></div>;
}

export default Oval;
