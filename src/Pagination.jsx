import React, { useState } from 'react'

const Pagination = () => {

    const [countpages,setcountpages] =useState(1)

    const itemsperpage = 10;
    const totalitemspages = 100;

    const total = Math.ceil(totalitemspages + itemsperpage);

    const Nextpage = () => {
        setcountpages (countpages + 1)

    }
    const Prepage = () => {
        setcountpages (countpages - 1)


    }

  return (
    <div>
        <p>page:{countpages} of {total}</p>
        <button onClick={Prepage} disabled={countpages === 1}>prepage</button>
        <button onClick={Nextpage} disabled={countpages === total}>Nextpage</button>
      
    </div>
  )
}

export default Pagination
