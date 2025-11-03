import React, { useState } from "react";
import "./App.css"; // ✅ make sure this file is in src/

function Counter() {
  const [count, setCount] = useState(0);
  const [activeBtn, setActiveBtn] = useState(""); // tracks which button was pressed

  const increment = () => {
    setCount(count + 1);
    setActiveBtn("plus");
    setTimeout(() => setActiveBtn(""), 200);
  };

  const decrement = () => {
    setCount(count - 1);
    setActiveBtn("minus");
    setTimeout(() => setActiveBtn(""), 200);
  };

  const reset = () => {
    setCount(0);
    setActiveBtn("");
  };

  return (
    <div className="app">
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <div className="button-group">
        <button
          className={`btn btn-plus ${activeBtn === "plus" ? "active" : ""}`}
          onClick={increment}
        >
          +
        </button>

        <button
          className={`btn btn-minus ${activeBtn === "minus" ? "active" : ""}`}
          onClick={decrement}
        >
          –
        </button>

        <button className="btn btn-reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
