import React,{useState} from 'react'

const UseState = () => {
  const [count, setcount] = useState(0)
  const [message, setmessage] = useState({
    message: 'Good Morning 🌞',
  })

  const messageChanger=()=>{
    setmessage({
      message: '💕 Thank You 💕',
    })

  }
  return (
    <>
    <h2>useState Hook</h2>
    <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
    <h3>{message.message}</h3>
    <button onClick={messageChanger}>Greet 🥀</button>
    <h3>Counter : {count}</h3>
    <button onClick={()=> setcount(count + 1)}>➕Increment ➕</button>
    <button onClick={()=> setcount(count - 1)}>➖Decrement ➖</button>

    </>
  )
}

export default UseState