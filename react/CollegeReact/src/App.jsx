import React, { useState } from "react";
import "./App.css";

export default function App() {
  // state: count value, starts at 0
  const [count, setCount] = useState(0);

  // state: step value for increment/decrement
  const [step, setStep] = useState(1);

  // increment function
  const increment = () => setCount(prev => prev + Number(step));

  // decrement function
  const decrement = () => setCount(prev => prev - Number(step));

  // reset function
  const reset = () => setCount(0);

  // handle step input change (only allow integers)
  const onChangeStep = (e) => {
    const val = e.target.value;
    // allow empty string so user can type
    if (val === "") {
      setStep("");
      return;
    }
    // parse to integer; if not a number, keep previous
    const n = parseInt(val, 10);
    if (!Number.isNaN(n)) setStep(n);
  };

  return (
    <div className="app">
      <h1>Simple Counter</h1>

      <div className="counter-card">
        <div className="display">{count}</div>

        <div className="controls">
          <button onClick={decrement} className="btn">-</button>
          <button onClick={increment} className="btn">+</button>
        </div>

        <div className="row">
          <label>
            Step:
            <input
              type="number"
              value={step}
              onChange={onChangeStep}
              min="1"
              className="step-input"
            />
          </label>

          <button onClick={reset} className="btn reset">Reset</button>
        </div>
      </div>

      <p className="note">Tip: change the step to add/subtract by more than 1.</p>
    </div>
  );
}
