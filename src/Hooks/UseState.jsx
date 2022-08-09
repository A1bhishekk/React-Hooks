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
    <h3>{message.message}</h3>
    <button onClick={messageChanger}>Greet 🥀</button>
    <h4>Counter : {count}</h4>
    <button onClick={()=> setcount(count + 1)}>➕Increment ➕</button>
    <button onClick={()=> setcount(count + 1)}>➖Decrement ➖</button>

    </>
  )
}

export default UseState