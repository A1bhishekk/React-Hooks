import React from 'react'
import { data,data1 } from '../ContextApi'

const ChildC = () => {
  return (
    <>
    <data.Consumer>
        {
            (name)=>{
                return(
                    <data1.Consumer>
                        {
                            (age)=>{
                                return(
                                    <>
                                    <h1 style={{color:'#5800FF'}}>My name is {name}  </h1>
                                    <h1> My age is {age}</h1>
                                    </>
                                )
                            }
                        }
                    </data1.Consumer>
                )
            }
        }
    </data.Consumer>
    </>
  )
}

export default ChildC