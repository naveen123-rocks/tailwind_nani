import React, { useState } from 'react'

const StyleAdjustment = () => {

    const [count,setCount] = useState(0)

    const style = {
        fontSize: `${10 + count}px`,
        color: count >20?'red':'green',
    };

  return (
    <div>
      <p style={style}>count:{count}</p>
      <button className=' bg-red-700 rounded-full' onClick={() => setCount(count +1)}>increament</button>
    </div>
  )
}

export default StyleAdjustment
