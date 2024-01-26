
// useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
// const [state, setState] = useState(initialState) useState(initialState) set functions, like setSomething(nextState)can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values.
// The setter functions can grow too big if the logic gets complicated, plus you have to make sure that you return new items in every setter function using the spreading syntax.Benefits of useState
// Eliminating constructor and setState 

import React, { useState } from "react";

const HookState = () => {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });
  const [id, setid] = useState("abcd");
  const handleClick2 = () => {
    // setCount(count + 1); //asynchronous // giving previous value not update initialvalue
    // console.log(count)

    // setCount((prev)=>prev+1)// all works fine here
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };

  const handleClick1 = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };

  return (
    <div>
      <button onClick={handleClick1}>-</button>
      <div>
        {" "}
        <h1>{count.num}</h1>
        <span>{count.id}</span>
      </div>

      <button onClick={handleClick2}>+</button>
    </div>
  );
};

export default HookState;
