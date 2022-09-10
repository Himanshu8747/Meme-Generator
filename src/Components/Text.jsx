import React,{useState} from 'react'
import Draggable from 'react-draggable'
const Text = () => {
  const [editMode,setEditMode]=useState(false);
  const[value,setValue]=useState("Double click to edit the text..");

  return (
    <Draggable>
      {
        editMode ? (
        <input 
          onDoubleClick={(e)=>setEditMode(false)}
          value={value} 
          onChange={e=>setValue(e.target.value)}/>
        ) : (
          <h1 onDoubleClick={(e)=>setEditMode(true)}>{value}</h1>
        )}
    </Draggable>
  )
}

export default Text