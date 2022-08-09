import React from 'react'
import { createContext } from 'react'
import UseCallBack from './UseCallBack';
import UseContext from './UseContext';
import UseEffect from './UseEffect';
import UseLayoutEffect from './UseLayoutEffect';
import UseMemo from './UseMemo';
import UseReducer from './UseReducer';
import USeRef from './USeRef';
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
    <UseReducer/>
    <UseCallBack/>
    <UseMemo/>
    <USeRef/>
    <UseLayoutEffect/>
    </>
  )
}

export default Hooks