import React from 'react'
import { useContext } from 'react'
import { data } from './Hooks'

const UseContext = () => {
    const name=useContext(data)
  return (
    <>
    <h2>{name}</h2>
    </>
  )
}

export default UseContext