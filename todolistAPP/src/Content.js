import React from 'react'


import Itemlist from './Itemlist'

function Content({items,handleCheck,handleDelete}) {
  

  return (
    <main className='main'>
       {items.length ?
    <Itemlist
      items = {items}
      handleCheck={handleCheck}
      handleDelete={handleDelete} 
    />
     : <h1 style={{marginTop:'2rem'}}>Your list is Empty</h1>
}
     
        
    </main>
  )
}

export default Content