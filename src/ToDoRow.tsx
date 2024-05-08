
import { useState } from 'react'
import {SmallButton} from './Button'
import Checkbox from './Checkbox'
import './ToDoRow.css'

function onClick(){
  return null
}



const ToDoRow: React.FC<{ task: string; childKey: string; onDelete:any }> = ({ task, childKey, onDelete }) => {
const [showButton,setShowButton]=useState(false)

function handleButton(ev:any){
    console.log(ev)
setShowButton(!showButton)
}
  return (
    <div style={{display:'block'}}>
    <div key={childKey} className='todoRow' onMouseEnter={handleButton} onMouseLeave={handleButton}>
        {/* <p>{task}</p> */}
      <Checkbox onChange={()=>null} label={task} checked={false} ></Checkbox> 
      <SmallButton visible={showButton} onSmallClick={onDelete} smallKey={childKey} label='x' />
    </div>
    </div>
  )
}

export default ToDoRow
