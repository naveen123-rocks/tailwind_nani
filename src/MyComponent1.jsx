import React, { useEffect, useRef } from 'react'

const MyComponent1 = () => {

    const Inputref = useRef();
    useEffect(()=>{
        Inputref.current.focus();
    },[])

  return (
    <div>
      <input ref={Inputref} />
    </div>
  )
}

export default MyComponent1
