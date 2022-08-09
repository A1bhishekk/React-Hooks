import React from 'react'
import { createContext } from 'react'
import Child from './Child'

export const  job=createContext()
const Parent1 = () => {
    const pro='Web Developer'
  return (
    <>
    <job.Provider value={pro}>
        <Child/>
    </job.Provider>
    </>
  )
}

export default Parent1