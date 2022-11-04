// import { useState } from "react";

const Counter = ({ counter, setCounter }) => {
  // const [counter, setCouter] = useState(0);
  return (
    <div className="counter-card">
      <div className="btn-block">
        <button
          className={counter === 0 ? "btn hidden" : "btn"}
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <div className="counter">{counter}</div>
        <button
          className={counter === 10 ? "btn hidden" : "btn"}
          onClick={() => {
            setCounter((counter[0] = 1));
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
