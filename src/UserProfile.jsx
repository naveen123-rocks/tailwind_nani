import React from 'react'

const UserProfile = ({login,user}) => {

  return (
    <div>
      {login ?(
        <p>welcome,{user}</p>
      ):(
        <p>please login</p>
      )}
    </div>
  )
}

export default UserProfile
