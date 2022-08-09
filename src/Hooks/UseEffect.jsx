import React, { useState } from "react";
import { useEffect } from "react";

const UseEffect = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("component mounted");
  }, [count]);

  return (
    <>
      <h2>useEffect Hook</h2>
      <p>
        The useEffect Hook allows you to perform side effects in your
        components. Some examples of side effects are: fetching data, directly
        updating the DOM, and timers. useEffect accepts two arguments. The
        second argument is optional.
      </p>

      <h3>Counter : {count}</h3>
      <button onClick={() => setcount(count + 1)}>➕Increment ➕</button>
      <button onClick={() => setcount(count - 1)}>➖Decrement ➖</button>
    </>
  );
};

export default UseEffect;
