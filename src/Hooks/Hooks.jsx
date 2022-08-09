import React from 'react'
import { createContext } from 'react'
import UseContext from './UseContext';
import UseEffect from './UseEffect';
import UseState from './UseState'

export const data=createContext();
const Hooks = () => {
    const name='useContext Hook'
  return (
    <>
    <h1 style={{color: '#F5E8C7'}}>Hooks in React JS</h1>
    <data.Provider value={name}>
        <UseContext/>
    </data.Provider>
    <UseState/>
    <UseEffect/>
    </>
  )
}

export default Hooks