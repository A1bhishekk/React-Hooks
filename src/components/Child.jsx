import React from 'react'
import { job } from './Parent1'

const Child = () => {
  return (
    <>
    <job.Consumer>
        {
            (pro)=>{
                return(
                    <h3>I an {pro}</h3>
                )
            }
        }
    </job.Consumer>
    </>
  )
}

export default Child