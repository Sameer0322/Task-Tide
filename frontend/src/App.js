import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo,deleteToDo } from "./utils/HandleApi";
import bodyBG from './Image/bodyBG.jpg';

function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setisUpdating] = useState(false)
  const [toDoId,setToDoId] = useState("") 





  useEffect(()=>{
    getAllToDo(setToDo)
  },[])

  const updateMode= (_id,text)=>{
    setisUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App" style={{
      background: `url(${bodyBG})`,
      backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '1486px',
        height: '740px'
    }}>
      {/* <div ></div> */}
      <div className="container" style={{position: "relative",
        zIndex: 1}}>
        <h1>TODO APP</h1>
        <div className="top">
          <input type="text" 
          placeholder="Add ToDo"
          value={text}
          onChange={(e)=>setText(e.target.value)}></input>
          <div className="add" 
          onClick={ isUpdating? ()=> updateToDo(toDoId,text,setToDo,setText,setisUpdating):()=>addToDo(text,setText,setToDo)}>
            {isUpdating? "Update":"Add"}
            </div>
        </div>
        <div className="list">
          {toDo.map((item)=> <ToDo 
          key = {item._id} 
          text ={item.text}
          updateMode={()=> updateMode(item._id,item.text)}
          deleteTodo={()=> deleteToDo(item._id,setToDo)}
          ></ToDo>)}
      
        </div>
      </div>
    </div>
  );
}

export default App;
