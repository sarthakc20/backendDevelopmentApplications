import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const AllToDos = ({todo}) => {
  return (
    <div className='myTodos'>
        {todo.todo} 
        <div>
        <MdEdit className='myIcons' /> <MdDelete className='myIcons' />
        </div>
    </div>
  )
}

export default AllToDos
