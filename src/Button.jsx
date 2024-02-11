import React from 'react'

const Button = ({ primary }) => {
    const buttonstyle = {
        color: primary ? 'green':'red',
        background: primary ? 'yellow':'pink',
    };

     
  return (
    <>
        <button style={buttonstyle}>
            {primary ? 'primary button' : 'Secondary button'}

        </button>
        </>
      
  )
}

export default Button
