import React, { useState } from 'react'

const LogicalAndOperator = () => {

    const [login,setlogin] = useState(true)
    const [admin,setadmin] = useState(false)

    const adminacess = login || admin;
  return (
    <div>
      <p>login :{login.toString()}</p>
      <p>admin:{admin.toString()}</p>
      <p>adminacess:{adminacess.toString()}</p>
    </div>
  )
}

export default LogicalAndOperator
