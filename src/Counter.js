import React, { useState } from "react";
import './Counter.css';
import Spline from '@splinetool/react-spline';

function Counter() {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);

  return (
    <div className="counter-container">
      <div className="spline-container">
        <Spline
          scene="https://prod.spline.design/dsiVNbx4xKKCtY9M/scene.splinecode"
        />
      </div>
      <div className="overlay">
        <h1>Counter App</h1>
        <button onClick={() => setShowCount(!showCount)}>{showCount ? 'Hide the counter' : 'Show the counter'}</button>
        {showCount ? (
          <>
            <h2>Counter is = {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Counter;
