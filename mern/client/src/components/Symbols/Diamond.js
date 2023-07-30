import "./Diamond.css";

function Diamond(props) {
  return <div className="Diamond" id={`${props.color}-${props.fill}`}></div>;
}

export default Diamond;
