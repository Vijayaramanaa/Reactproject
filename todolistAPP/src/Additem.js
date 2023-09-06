import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Additem = ({newItem,setNewItem,handleSubmit}) => {
  return (
   <form className='addForm' id="addName" onSubmit={handleSubmit}>
     <p htmlFor="addItem" className="addForm_label">Add Item</p>
     <input
        
        autoFocus
        id = 'addItem'
        type = "text"
        placeholder='Add Item'
        required
        value = {newItem}
        onChange={(e)=>setNewItem(e.target.value)}
     />
     <button type="submit"
       >
        <FaPlus/>
     </button>
   </form>
  )
}

export default Additem