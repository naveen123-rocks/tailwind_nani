import React,{useState} from 'react'

const ShoppingCart = () => {
    const [quntity,setquantity] =useState(2)
    const [pricequntity] = useState(20)

    const total = quntity * pricequntity;




  return (
    <div>
      <p>quantity:{quntity}</p>
      <p>pricequntity:{pricequntity}</p>
      <p>total:{total}</p>
    </div>
  )
}

export default ShoppingCart
