import React from "react";
import { useContext } from "react";
import { data } from "./Hooks";

const UseContext = () => {
  const name = useContext(data);
  return (
    <>
      <h2>{name}</h2>
      <p>
        React Context is a way to manage state globally. It can be used together
        with the useState Hook to share state between deeply nested components
        more easily than with useState alone.
      </p>
    </>
  );
};

export default UseContext;
