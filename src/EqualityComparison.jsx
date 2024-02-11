import React, { useState } from 'react'

const EqualityComparison = () => {

    const [value,setvalue] = useState(20)
   const Handler = ()=>{
    const result = value >10
    document.write(result)
   }

  return (
    <div>
        <p>value:{value}</p>
        <button onClick={Handler}>eqaulity</button>
      
    </div>
  )
}

export default EqualityComparison
