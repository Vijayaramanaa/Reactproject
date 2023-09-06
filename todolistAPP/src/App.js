import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import { useState } from 'react'
import Additem from './Additem'
import SearchItem from './SearchItem'

function App() {
  const[items,setItems] = useState(JSON.parse(localStorage.getItem("todolist")));
   const [newItem,setNewItem]= useState('');
   const [search,setSearch]= useState('')
   
   
   const handleCheck = (id)=>{
     const listItem = items.map((item)=>
      item.id === id? {...item,checked:!item.checked}:item)
      setItems(listItem)
      localStorage.setItem("todolist",JSON.stringify(listItem))
   }
   const handleDelete = (id)=>{
        const listItem = items.filter((item)=>
          item.id !== id )
        setItems(listItem)
        localStorage.setItem("todolist",JSON.stringify(listItem))
   }
   const handleSubmit = (e)=>{
      e.preventDefault();
      if(!newItem)return;
      console.log(e)
      console.log(newItem)
      addItem(newItem)
      setNewItem('')
   }
      const addItem = (item) =>{
        const id = items.length? items[items.length-1].id +1 : 1
        const addNewItem = {id,checked:false,item}
        const listItems = [...items,addNewItem]
        setItems(listItems)
        localStorage.setItem("todolist",JSON.stringify(listItems))
     }
      
   
   
   
  
  return (
    <div>
      <Header  />
      <Additem
      newItem = {newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <SearchItem
      search={search}
      setSearch = {setSearch}
      />
      <Content
      items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      
      handleCheck={handleCheck}
      handleDelete={handleDelete} 
      />
      
      <Footer
      items={items}
      />
    </div>
  )
}

export default App
