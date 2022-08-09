import React, { useReducer } from 'react'

const intialState=0;
const reducer=(state,action)=>{
    // console.log(state,action)
    if(action.type==='INCREMENT'){
        return state +1;
    }
    if(action.type==='DECREMENT'){
        return state -1;
    }
    return state;
}
const UseReducer = () => {
   const [state,dispatch]= useReducer(reducer,intialState)
  return (
    <>
    <h2>useReducer Hook</h2>
    <p>UseReducer is a reducer function that returns the initial state of the component.</p>
    <h3>Counter : {state}</h3>
    <button onClick={()=> dispatch({type:'INCREMENT'})}>➕Increment➖</button>
    <button onClick={()=> dispatch({type:'DECREMENT'})}>➖Decrement➖</button>
    </>
  )
}

export default UseReducer