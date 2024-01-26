import React, { useState } from 'react';

// First Child Component
function CounterDisplay({ counter, onIncrement, onDecrement }) {
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}

// Second Child Component
function ResetButton({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

// Parent Component
function ParentComponent() {
  // State variable in the parent component
  const [counter, setCounter] = useState(0);

  // Callbacks to update the counter state
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);

  return (
    <div>
      <h2>Parent Component</h2>
      {/* First Child Component */}
      <CounterDisplay
        counter={counter}
        onIncrement={incrementCounter}
        onDecrement={decrementCounter}
      />

      {/* Second Child Component */}
      <ResetButton onReset={resetCounter} />
    </div>
  );
}

export default ParentComponent;