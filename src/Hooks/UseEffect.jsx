import React,{useState} from 'react'
import { useEffect } from 'react'

const UseEffect = () => {
  const [count, setcount] = useState(0)
  useEffect(()=>{
    console.log("component mounted")
  },[count])

  return (
    <>
    <h2>UseEffect Hook</h2>
  
    <h4>Counter : {count}</h4>
    <button onClick={()=> setcount(count + 1)}>➕Increment ➕</button>
    <button onClick={()=> setcount(count + 1)}>➖Decrement ➖</button>

    </>
  )
}

export default UseEffect