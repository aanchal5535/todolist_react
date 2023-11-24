import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";


const Todo = () => {
    const [data,setData]=useState('')
    const[items, setItems]=useState([])

    const addItem =()=>{
        if(!data){

        }else{
            setItems([...items,data]);
            setData('')
        }
}
const deleteItem = (id) =>{
    console.log(id);
    const updatedItems =items.filter((elem,index)=>{
        return index != id ;
    })
    setItems(updatedItems);
} 
const removeall=()=>{
    setItems([]);
}

  return (
   <>
    <div className="min-h-screen flex items-center justify-center bg-[#f9f4f1]">
    <div className="w-[450px] relative m-5 p-4 bg-blue-400 shadow-2xl rounded-xl md:flex-row md:space-y-0 ">
        <div className='text-center justify-center text-2xl font-maven'>
           <h2 className='text-white text-2xl m-3 font-semibold'> TODO LIST </h2>
        </div>    
       <div className='pt-2 relative'>
        <input type="text" className='w-full border-2 border-slate-400 rounded p-2' placeholder='Add item ...' required
        value={data}
        onChange={(e) => setData(e.target.value)}/>
        <IoMdAdd className='absolute right-2 top-5 text-xl hover:text-green-600' title='Add Item' onClick={addItem}/> 
      </div>
      <div>
        {
            items.map((elem,index)=> {
                return(
                <div className='w-full bg-white border-2 border-slate-400 rounded p-2 relative mt-2' key={index}>
                <h3>{elem}</h3>
                <MdDeleteForever className='absolute right-2 top-3 text-xl hover:text-green-600' title='Delete Item' onClick={()=>deleteItem(index)} />
            </div>)
            })
        }
        
      </div>
      <div className=' items-center justify-center flex'>
        <button className=' bg-black text-white border-2 border-white rounded p-2 relative mt-2 hover:bg-white hover:text-black hover:border-4 hover:border-black' onClick={removeall}>Remove All</button>
      </div>
    </div>
    </div>
   </>
  )
}

export default Todo
