// UseEffect -used to handle the side effects in React such as fetching data, and updating DOM. This hook runs on every render but there is also a way of using a dependency array using which we can control the effect of rendering .listen for real-time data changes and update the component state accordingly.
// The dependency array in the useEffect hook is necessary to control when the effect should run and prevent unnecessary re-renders we tell React to only re-run the effect when the dependencies have changed.
// This cleanup function is used to clean up any resources or effects that were created in the hook. You can clean side effects like fetching data from an API, setting up event listeners, or creating intervals or timeouts.it takes two things callback and depandency array
import React, { useEffect, useState } from "react";

const HookUseEffect = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });

  const handleAdd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };

  const handleSubstract = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };


  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    // console.log("mounted");// it will print 2nd 
    return () => {
      window.removeEventListener("resize");
    //   console.log("Unmounted");//unmounting the useeffect so it will print first in console when we click on change count value 
    }
  }, [count]) ;
//it takes a callback and depandency array 

  // empty depandency array runs only one time  //  if there is no dependency then it will run infinite time // [count ] if we write like this so it update every time when count value is changes

  return (
    <div>
      <button onClick={handleSubstract}>-</button>
      <span>{count.num}</span>
      <span>{count.id}</span>
      <button onClick={handleAdd}>+</button>
      <p>{screenWidth}</p>
    </div>
  );
};

export default HookUseEffect;
