import React from 'react'
import { data } from '../ContextApi'
import Parent1 from './Parent1'

const Parent = () => {
  return (
    <>
    <data.Consumer>
        {
            (name)=>{
                return(
                    <h3>I am {name}</h3>
                )
            }
        }
    </data.Consumer>
    <Parent1/>
    </>
  )
}

export default Parent