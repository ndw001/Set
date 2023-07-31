import "./Diamond.css";

function Diamond(props) {
  return (
    <div className="Diamond" id={`Diamond-${props.color}-${props.fill}`}></div>
  );
}

export default Diamond;
