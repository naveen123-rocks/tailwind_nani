import React, { useState } from 'react'

const AdditionAssignment = () => {

    const [count,setcount] =  useState(20)

    const Handler = ()=>{

        const increamnet = 3 
        setcount((precount)=>precount + increamnet)
    }
const Handlerdecre = () => {
    const decreament = 2

    setcount((precount)=>precount - decreament )
}
  return (
    <div>
     <p>count:{count}</p>
     <button onClick={Handler} disabled ={count === 3}>increament add 5</button>
     <button onClick={Handlerdecre}>decreament</button>
    </div>
  )
}

export default AdditionAssignment

