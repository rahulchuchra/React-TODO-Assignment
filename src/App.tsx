import React, { useState } from 'react';
import ToDoRow from './ToDoRow';
import './App.css'
import {Button} from './Button';

interface AppProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}



const App: React.FC<AppProps> = () => {
 const [text,setText] = useState<string>('')
 const [taskList,setTaskList]=useState<Array<string>>([])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value as any)
  };

  

  function smallButtonClick(ev:any){
    
    let list= taskList.filter((_, index) => index !=ev.target.getAttribute('data-index') )
    console.log("On small button");
    console.log("Index= ",ev.target.getAttribute('data-index'));
    setTaskList(list)

   }

  function bigButtonClick(ev:any){
    console.log(text);
    console.log('on big button');
    
   taskList.push(text)
   setTaskList(taskList)
   console.log(taskList);
   
   setText('')
  }

  return (
    <>
    
    <div className='container'>
    <span style={{color:'black',fontSize:'20px'}}>Todo</span><br />

   
   {taskList.map((task:string,ind)=> {
    return <ToDoRow task={task} key={ind} onDelete={smallButtonClick} childKey={String(ind)}></ToDoRow>
    }
    )}
    
    <div className='input-wrapper'><input
      type="text"
      value={text}
      className='custom-input'
      onChange={handleChange}
      placeholder={'Add task here...'}
    />  <Button onClick={text!=''? bigButtonClick: ()=>null} label='Add'></Button> </div>
    </div>
    </>
  );
};

export default App;
