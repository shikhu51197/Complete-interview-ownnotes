import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleClick = () => {
    const id = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    setIntervalId(id);
  };
  
  const handleClick1 = () => {
    clearInterval(intervalId);
  };

  const handleClick2 = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter app</h1>
      <h2>Count: - {count}</h2>
      <button onClick={handleClick}>Start</button>
      <button onClick={handleClick1}>Stop</button>
      <button onClick={handleClick2}>Reset</button>
    </div>
  );
};

export default Counter;
