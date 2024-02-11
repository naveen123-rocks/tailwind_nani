import React, { useState } from 'react'


const MyComponent = () => {

    const [login,setlogin] = useState (false)

    const Handlelogin = () => {
        setlogin (true);
    }
const Handlelogout = ()=>{
    setlogin (false)
}

  return (
    <div>
      <h1>welcome to reactjs open page</h1>
      {login ? (
        <div>
       <p>heloo user welcome</p>
       <button onClick={Handlelogin}>login</button>
        </div>
      ):(
        <div>
            <p>user logout</p>
        <button onClick={Handlelogout}>logout</button>
        </div>  
      )}
    </div>
  )
}

export default MyComponent
