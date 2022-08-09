import { createContext } from "react";
import ChildA from "./components/ChildA";
import "./App.css";
import Parent from "./components/Parent";
import Hooks from "./Hooks/Hooks";

export const data = createContext();
export const data1 = createContext();
const ContextApi = () => {
  const name = "Abhishek Kumar";
  const age = 24;
  return (
    <>
    
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <h1>What is Context API?</h1>
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </p>
          <ChildA />
          <Parent />
        </data1.Provider>
      </data.Provider>
      {/* <Hooks /> */}
     
    </>
  );
};

export default ContextApi;
