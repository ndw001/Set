import { useEffect } from "react";

function Timer(props) {
  useEffect(() => {
    const interval = setInterval(() => {
      props.setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeString =
    props.time % 60 < 10
      ? `${Math.floor(props.time / 60)}:0${props.time % 60}`
      : `${Math.floor(props.time / 60)}:${props.time % 60}`;

  return <div className="Timer">Time: {timeString}</div>;
}

export default Timer;
